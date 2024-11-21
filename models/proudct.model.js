// This is a Model that is used in creating data stored in the database

import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    image: {
      type: String,
      required: false,
    },
  },

  {
    timestamp: true,
  }
);

// This is to save data to the database and export data
const product = mongoose.model("Product", productSchema);

export default product

