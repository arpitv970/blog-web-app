import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes';

import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const URI = process.env.MONOGO_URI;
app.use('/api/user', router);
mongoose
    .connect(URI)
    .then(() => {
        app.listen(5000);
        console.log('\n');
    })
    .then(() => {
        console.log(
            'Connected to the MongoDB Atlas & listening to localhost:5000'
        );
    })
    .catch((err) => {
        console.log(err);
    });
