import express from "express";
import CategoriesController from "../controllers/categoryController";

const categoriesRouter = express.Router();

const categoriesController = new CategoriesController();

categoriesRouter.get("/", categoriesController.getAllCategories);
categoriesRouter.get("/:id", categoriesController.getCategoryDetail);
categoriesRouter.post("/", categoriesController.creatCategory);
categoriesRouter.put("/:id", categoriesController.updateCategory);
categoriesRouter.delete("/:id", categoriesController.deleteCategory);

export default categoriesRouter;