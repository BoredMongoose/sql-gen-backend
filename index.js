import cors from 'cors';
import generate from './generate.js';
import  express from 'express';

const app = express();

app.use(express.json())

app.use(cors());

const port = process.env.PORT || 3005;

app.get("/", (req,res) => {
    res.send("Hello world from our API")
})



app.post("/generate", async (req,res) =>{
    const query = req.body.query
    try { 
        const sqlQuery = await generate(query)
        res.json({ response: sqlQuery })

    } catch (error) {
        console.error(error)
        res.status(500).send("Internal server error")
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

