import express from 'express'
import dotenv from "dotenv";
import {connectDB} from './config/db.js'
import path from "path"
import productRoutes from './routes/product.route.js';
const app = express();
dotenv.config();

const __dirname = path.resolve();
const PORT=process.env.PORT || 5000;
app.use(express.json()); //allow json data

app.use("/api/products",productRoutes);

if (process.env.NODE_ENV === "production")
{
    app.use(express.static(path.join(__dirname, "frontend/dist")))
    app.get("*",(req,res) => {
        res.sendFile(path.resolve(__dirname,"frontend","dist","index.html"))
    })
}
app.listen(PORT,()=>{
    connectDB();
    console.log("Server Started");
})