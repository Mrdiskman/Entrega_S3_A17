import {Router} from "express"
import createCategoryController from "../controller/categories/createCategories.controller"
import deleteCategoryController from "../controller/categories/deleteCategory.Controller"
import getCategoryController from "../controller/categories/getCategory.controller"
import listCatecoriesController from "../controller/categories/listCategory.controller"
import updateCategoryController from "../controller/categories/updateCategory.Controller"
import verifyIdCategoryMiddleware from "../middleware/verifyCategoryId.middleware"

const router = Router()

router.get("/", listCatecoriesController)
router.get("/:id", verifyIdCategoryMiddleware, getCategoryController)
router.post("/", createCategoryController)
router.patch("/:id", verifyIdCategoryMiddleware, updateCategoryController)
router.delete("/:id", verifyIdCategoryMiddleware, deleteCategoryController)

export default router