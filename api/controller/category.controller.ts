import DefaultController from "./default.controller";

import { NextFunction, Request, Response, Router } from "express";

import { getRepository } from "typeorm";
import { Session, Product, User, Role, Category, Subcategory } from "../entity";

export class CategoryController extends DefaultController {
  protected initializeRoutes(): Router {
    const router = Router();

    router.route("/api/category").get((req: Request, res: Response) => {
      const categoryRepo = getRepository(Category);
      categoryRepo.find().then((categories: Category[]) => {
        res.status(200).send({ categories });
      });
    });

    router.route("/api/category").post(
      this.isAuthenticated(Role.EMPLOYEE, Role.ADMIN),
      (req: Request, res: Response) => {
        const categoryRepo = getRepository(Category);
        const { name } = req.body;
        const category = new Category();
        category.name = name;
        categoryRepo.save(category).then(
          (createdCategory: Category) => {
            res.sendStatus(200);
          },
          () => {
            res.sendStatus(500);
          }
        )
      }
    );

    router.route("/api/category/:id").delete(
      this.isAuthenticated(Role.EMPLOYEE, Role.ADMIN),
      (req: Request, res: Response) => {
        const categoryRepo = getRepository(Category);
        const id = parseInt(req.params.id);
        categoryRepo.findOne(id).then(
          (foundCategory: Category | undefined) => {
            if (foundCategory) {
              categoryRepo.remove(foundCategory).then(() => {
                res.sendStatus(200);
              });
            }
            else {
              res.sendStatus(404);
            }
          }
        )
      }
    );

    router.route("/api/subcategory/:categoryId").get((req: Request, res: Response) => {
      const categoryRepo = getRepository(Category);
      const categoryId = parseInt(req.params.categoryId, 10);
      categoryRepo.findOne(categoryId, {relations: ["subcategories"]}).then(
        (category: Category | undefined) => {
          const subcategories = category ? category.subcategories : [];
          res.status(200).send({ subcategories });
        }
      );
    });

    router.route("/api/subcategory").post(
      this.isAuthenticated(Role.EMPLOYEE, Role.ADMIN),
      (req: Request, res: Response) => {
        const subcategoryRepo = getRepository(Subcategory);
        const { name, categoryId } = req.body;
        const subcategory = new Subcategory();
        subcategory.name = name;
        subcategory.category = new Category();
        subcategory.category.id = categoryId;
        subcategoryRepo.save(subcategory).then(
          (createdSubcategory: Subcategory) => {
            res.sendStatus(200);
          },
          () => {
            res.sendStatus(500);
          }
        )
      }
    );

    router.route("/api/subcategory/:id").delete(
      this.isAuthenticated(Role.EMPLOYEE, Role.ADMIN),
      (req: Request, res: Response) => {
        const subcategoryRepo = getRepository(Subcategory);
        const id = parseInt(req.params.id);
        subcategoryRepo.findOne(id).then(
          (foundSubcategory: Subcategory | undefined) => {
            if (foundSubcategory) {
              subcategoryRepo.remove(foundSubcategory).then(() => {
                res.sendStatus(200);
              });
            }
            else {
              res.sendStatus(404);
            }
          }
        )
      }
    );

    return router;
  }
}

export default CategoryController;
