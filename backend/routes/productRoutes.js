import express from "express";
import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";

const router = express.Router();

// @desc fetch all products and products by id  GET/api/products/:id public

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    return res.json(products);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      return res.json(product);
    } else {
      return res
        .status(400)
        .json.send({ msg: "no product found with this id" });
    }
  })
);
export default router;
