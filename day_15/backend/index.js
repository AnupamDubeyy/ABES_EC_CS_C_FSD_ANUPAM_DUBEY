import express from "express";

const app = express();

app.use(express.json());//to parse json data from request

const users = [
    {
        id: 1,
        name: "abc",
        section: "CS-C"
    },
    {
        id: 2,
        name: "xyz",
        section: "CS-B"
    }
]
app.get("/", (req, res) => {
    res.json(users)
})

app.listen(5000, () => {
    console.log(`server is running http://localhost:5000`);
})