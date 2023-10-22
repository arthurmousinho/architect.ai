import OpenAI from "openai";
import * as dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function generateImages(generationData) {
    const prompt = `Uma imagem com uma ampla pespectiva de uma ${generationData.type} residencial ${generationData.style}, de alto padrao de luxo, muito realista, formada por materiais como: ${generationData.materials}. Adicione elementos como ${generationData.elements}. Gere a imagem com o clima durante ${generationData.weather}`
    const headers = {
        prompt: prompt,
        n: 4,
        size: "512x512"
    }
    const response = await openai.images.generate(headers)
    return response.data;
}