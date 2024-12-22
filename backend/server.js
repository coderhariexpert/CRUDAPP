import express from 'express'
import dotenv from "dotenv";
import {connectDB} from './config/db.js'

import productRoutes from './routes/product.route.js';
const app = express();
dotenv.config();

const PORT=process.env.PORT || 5000;
app.use(express.json()); //allow json data

app.use("/api/products",productRoutes);


app.listen(PORT,()=>{
    connectDB();
    console.log("Server Started");
})