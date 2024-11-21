import product from "../models/proudct.model.js";


// This is to get all products
const getProducts = async (req,res) =>{
    try {
        const products = await product.find({});
        res.status(200).json(products);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }
// This is to get the data stored by its unique id
const getProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const products = await product.findById(id);
      res.status(200).json({ products });
    } catch (error) {
      res.status({ message: error.message });
    }
  };

   // This is to save products from the model to the database
const createProduct = async (req,res ) => {
    try {
        const mainProduct = await product.create(req.body);
        res.status(200).json(mainProduct);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }

    // To update product
const updateProduct = async (req,res) =>{
    try {
        const { id } = req.params;
        const upProduct = await product.findByIdAndUpdate(id, req.body); //This is to find the product by id and update it by what the user pass in
    
        if (!upProduct) {
          return res.status(404).json({ message: "Product not found" });
        }
    
        const updatedProduct = await product.findById(id);
        res.status(200).json(updatedProduct);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
}

// To delete product
const deleteProduct = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteProduct = await product.findByIdAndDelete(id);
      if (!deleteProduct) {
        res.status(404).json({ message: "Product not found" });
      }
  
      res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
}
// This is to export all the function
export {getProducts , getProduct, createProduct, updateProduct, deleteProduct};