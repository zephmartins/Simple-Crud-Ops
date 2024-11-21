import express from "express";
import mongoose from "mongoose";
// import product from "./models/proudct.model.js";
import productRoutes from './routes/product.routes.js';
import bodyParser from "body-parser";

const app = express();
const port = 3000;

//middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


// routes
app.use("/api/products", productRoutes)

app.get("/", (req, res) => {
  res.send("Thank you Jesus");
});




// This connects MongoDB to your application

mongoose.connect(
    "mongodb+srv://martinszeph8:tqPJw8eT5B0HCnth@node1.gfv3h.mongodb.net/?retryWrites=true&w=majority&appName=node1"
  )


  .then(() => {console.log("Connected to database!")

    app.listen(port, () => console.log("app listening on port 3000!"))

})


  .catch(() => {
    console.log("Not connected to the database");
  });

 


