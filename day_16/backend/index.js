import { log } from "console";
import express from "express";
import fs from 'fs';

const app = express();
const PORT = 8800;

app.use(express.json());

const readData = () => {
    const data = fs.readFileSync("./data.json", "utf-8");
    return JSON.parse(data);
}
const writeData = (data) => {
    fs.writeFileSync("./data.json", JSON.stringify(data,null,2));
}

app.get("/users", (req, res) => {
    res.json(readData());
})
app.post("/users", async (req, res) => {
    const fileData = await readData();

    const data = req.body;
    const newData = { id: fileData.length+1, data }

    fileData.push(newData);

    await writeData(fileData);
    res.status(201).json({ message: "successfully created." })
})

app.listen(PORT, () => {
    console.log(`server is running http://localhost:${PORT}`);
})