import express from "express";
import { generateImages } from "./bot.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

app.post("/generate" , async (request, response) => {
    try {
        const images = await generateImages(request.body);
        response.send(images);
    } catch(error) {
        response.send(error)
    }
});

app.get("/", (req, res) => {
    res.send("ok")
})

app.listen(4000, () => {
    console.log('Server is running -- port: 4000');
});