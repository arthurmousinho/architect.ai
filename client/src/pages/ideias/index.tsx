import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import axios from "axios";
import { Wand2 } from "lucide-react";
import { FormEvent, useState } from "react";

interface GenerationImageData {
    type: "interior" | "exterior" | string;
    style: "moderno" | "rustico" | string;
    weather:  "dia" | "noite" | string;
    materials: string;
    elements: string;
}

interface ImageResult {
    url: string
}

export function Ideias() {

    const [type, setType] = useState("");
    const [style, setStyle] = useState("");
    const [weather, setWeather] = useState("");
    const [materials, setMaterials] = useState("");
    const [elements, setElements] = useState("");

    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState<ImageResult[]>([]);

    
    function allInputsValid() {
        const fields = [type, style,elements ,materials, weather];
        return fields.every(field => field.trim() !== "");
    }

    async function getImages(generationData: GenerationImageData) {
        try {
            const response = await axios.post("http://localhost:4000/generate", generationData);
            if (Array.isArray(response.data)) {
                setImages(response.data);
            }
        } catch (error) {
            alert("Ocorreu um erro, tente novamente");
        } finally {
            setLoading(false);
        }
    }

    function handleSubmit(event: FormEvent) {
        event.preventDefault();
        if(allInputsValid()) {
            setLoading(true);
            const generationData: GenerationImageData = {
                type: type,
                style: style,
                weather: weather,
                materials: materials,
                elements: elements
            };
            getImages(generationData);
        } else {
            alert("Preencha todos os campos")
        }
    }
   


    return (
        <main className="flex flex-col items-center justify-center mt-10 bg-black">

            <Card className="w-[95vw] md:w-[700px] border-input bg-transparent">
                <CardHeader>
                    <h1 className="text-2xl font-bold text-gray-300">
                        O que vamos criar hoje?
                    </h1>
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                        <div className="flex items-center gap-4">
                            <label htmlFor="type" className="hidden">Tipo de projeto</label>
                            <Select onValueChange={value => setType(value)}>
                                <SelectTrigger className="flex-1 h-10" id="type">
                                    <SelectValue placeholder="Tipo de projeto"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="exterior" className="cursor-pointer">Fachada</SelectItem>
                                    <SelectItem value="interior" className="cursor-pointer">Interior</SelectItem>
                                </SelectContent>
                            </Select>

                            <label htmlFor="style" className="hidden">Estilo</label>
                            <Select onValueChange={value => setStyle(value)}>
                                <SelectTrigger className="flex-1 h-10" id="style">
                                    <SelectValue placeholder="Estilo"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="rustico" className="cursor-pointer">Rústico</SelectItem>
                                    <SelectItem value="moderno" className="cursor-pointer">Moderno</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <label htmlFor="weather" className="hidden">Tempo</label>
                        <Select onValueChange={value => setWeather(value)}>
                            <SelectTrigger className="flex-1 h-10" id="weather">
                                <SelectValue placeholder="Tempo"/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="dia" className="cursor-pointer">Dia</SelectItem>
                                <SelectItem value="noite" className="cursor-pointer">Noite</SelectItem>
                            </SelectContent>
                        </Select>

                        <label htmlFor="materials" className="hidden">Materiais</label>
                        <Input 
                            placeholder="Materiais (ex: madeira, cerâmica, pedra)" 
                            onChange={event => setMaterials(event.target.value)}
                            id="materials"
                        />

                        <label htmlFor="elements" className="hidden">Elementos</label>
                        <Input 
                            placeholder="Elementos (ex: piscina, janelas de vidro)" 
                            onChange={event => setElements(event.target.value)}
                            id="elements"
                        />

                        <Button 
                            className={`flex items-center gap-2 h-10 w-full text-base ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} type="submit" 
                        >
                            <Wand2 size={20} />
                            {
                                loading ? "Aguarde..." : "Gerar Ideias"
                            }
                        </Button>
                    </form>
                </CardContent>

            </Card>

            <div className="w-[95vw] lg:w-[1136px] flex flex-col lg:flex-row flex-wrap gap-6 items-center justify-center mt-10 mb-10">
                {
                    loading ? (
                        <>
                            <div className="w-[512px] h-[512px] bg-gray-950"></div>
                            <div className="w-[512px] h-[512px] bg-gray-950"></div>
                            <div className="w-[512px] h-[512px] bg-gray-950"></div>
                            <div className="w-[512px] h-[512px] bg-gray-950"></div>
                        </>
                    ) : (
                        images.map(img => {
                            return (
                                <img src={`${img.url}`} key={img.url} className="hover:scale-105 transition-transform w-auto md:w-[512px]"/>
                            )
                        })
                    )
                }
            </div>

        </main>
    )
}