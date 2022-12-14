import express from "express";
import "dotenv/config";
import { startDatabase } from "./database";
import productsRoutes from "./routes/products.routes"
import categoriesRoutes from "./routes/categories.routes"

const app = express();

app.use(express.json());
app.use("/products", productsRoutes)
app.use("/categories", categoriesRoutes)

export default app.listen(3333, () => {
  startDatabase();
});


