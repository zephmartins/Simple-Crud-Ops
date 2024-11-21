import express from 'express';
import product from '../models/proudct.model.js';
const router = express.Router();
import {getProducts, getProduct, createProduct,updateProduct,deleteProduct} from '../controllers/product.controller.js';


// This is to get all the products we have added in the database
router.get('/', getProducts );

// This is to get products by id from the database
router.get('/:id', getProduct)
// This adds new products to the database
router.post('/' , createProduct)
// This update a product by id
router.put('/:id', updateProduct)

// This delete a product by id
router.delete('/:id', deleteProduct)



export default router;
 