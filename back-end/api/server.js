import express from "express"
import { artistArray } from "../../src/assets/database/artists.js";
import { songsArray } from "../../src/assets/database/songs.js";
const app = express();
const PORT = 3001
import { db } from "./connect.js";

app.get('/', (request, response ) =>{
    response.send('Ola, mundo')
})
app.get('/artist', async(request, response ) =>{
    response.send( await db.collection("artists").find({}).toArray()
)
})
app.get('/songs', (request, response ) =>{
    response.send('Ola, mundo')
})
app.listen(PORT, () =>{
    console.log("servidor na porta" + PORT)
})