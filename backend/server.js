import express from "express";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middle/errorMiddle.js";

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("api running");
});

app.use("/api/products", productRoutes);

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, console.log(`server running >>>>>>>${port}`));
