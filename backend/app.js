import express from 'express';
import mongoose from 'mongoose';
import router from './routes/user-routes';

const app = express();

app.use('/api/user', router);
mongoose
    .connect(
        'mongodb+srv://admin:EwE7c4KpiUTSmh5c@cluster0.z1nxi1r.mongodb.net/Blog?retryWrites=true&w=majority'
    )
    .then(() => {
        app.listen(5000);
    })
    .then(() => {
        console.log(
            'Connected to the MongoDB Atlas & listening to localhost:5000'
        );
    })
    .catch((err) => {
        console.log(err);
    });
