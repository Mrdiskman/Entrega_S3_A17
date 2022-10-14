import {Router} from "express"
import CreateProductsController from "../controller/products/CreateProduct.controller"
import deleteProductController from "../controller/products/deleteProduct.controller"
import getProductController from "../controller/products/getProduct.controller"
import listCategoryProductsController from "../controller/products/listCategoryProducts.Controller"
import listProductscontroller from "../controller/products/listProducts.cotroller"
import patchProductsController from "../controller/products/patchProduct.controller"
import verifyIdProductMiddleware from "../middleware/verifyIdProduct.middleware"

const router = Router()

router.get("/", listProductscontroller)
router.get("/:id", verifyIdProductMiddleware, getProductController)
router.get("/category/:id", listCategoryProductsController)
router.post("/", CreateProductsController)
router.patch("/:id", verifyIdProductMiddleware, patchProductsController)
router.delete("/:id", verifyIdProductMiddleware, deleteProductController)

export default router