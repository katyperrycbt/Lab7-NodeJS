import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.route.js';
import dbRoutes from './routes/db.route.js';

dotenv.config();

const app = express();

app.use(express.json({ limit: "150mb", extended: true }));
app.use(express.urlencoded({ limit: "150mb", extended: true }));
app.use(cors());

app.use('/auth', authRoutes);
app.use('/course', dbRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to Web Lab 7');
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})