import express from "express";
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import authRouther from './routes/authRouter.js';
import recordRouter from './routes/recordRouter.js';
const app = express();
dotenv.config();

const PORT =  process.env.PORT || 8080;

app.use(bodyParser.json());
app.use('/api/auth', authRouther);
app.use('/api/record', recordRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
