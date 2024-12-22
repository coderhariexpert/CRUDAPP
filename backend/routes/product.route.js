import express from 'express'
const router = express.Router();
import {DeleteProduct,getProducts,CreateProduct,UpdateProduct} from "../controllers/product.controller.js"

router.post("/",CreateProduct);
router.get("/",getProducts);
router.put("/:id",UpdateProduct);
router.delete("/:id",DeleteProduct);

export default router;