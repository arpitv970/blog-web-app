import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes';

import * as dotenv from 'dotenv';
import blogRouter from './routes/blog-routes';
dotenv.config();

const app = express();
const URI = process.env.MONOGO_URI;

// to parse json datatype as default
app.use(express.json());

// routing for users
app.use('/api/user', router);

// routing for blogs
app.use('/api/blog', blogRouter);

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
