import express from "express";
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();

// MIDDLEWARE TO PARSE REQUEST BODY
app.use(express.json());

app.use(cors());

// app.use(
//     cors({
//         origin: 'http://localhost:3002',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type']
//     })
//     )

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome to MERN')
})

app.use('/books', booksRoute)

mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('app connected to database')
        app.listen(PORT, () => {
            console.log(`App listening to port on ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })