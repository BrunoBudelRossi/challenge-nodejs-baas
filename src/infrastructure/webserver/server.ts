import express from 'express';
import { json, urlencoded } from 'express';
import router from '@interfaces/router';
import cors from 'cors';

export const app = express();

app.disable('x-powered-by');

const corsOptions: cors.CorsOptions = {
    origin: '*',
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
};

app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/', router);

export const start = () => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
};
