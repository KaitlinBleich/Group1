import DefaultController from "./default.controller";

import { NextFunction, Request, Response, Router } from "express";

import { getRepository } from "typeorm";
import { Session, Product, User, Role } from "../entity";

export class ProductController extends DefaultController {
  protected initializeRoutes(): Router {
    const router = Router();

    router.route("/api/products").get((req: Request, res: Response) => {
      const productRepo = getRepository(Product);
      let query: any = {};
      if (req.query.category) {
        query.category = req.query.category;
        if (req.query.subcategory) {
            query.subcategory = req.query.subcategory;
        }
      }
      productRepo.find({where: query}).then((products: Product[]) => {
        res.status(200).send({ products });
      });
    });

    router.route("/api/products").post(
      this.isAuthenticated(Role.EMPLOYEE, Role.ADMIN),
      (req: Request, res: Response) => {
        const productRepo = getRepository(Product);
        const { name, brand, price, stock, shipping, description, images, category, subcategory } = req.body;
        const product = new Product();
        product.name = name;
        product.brand = brand;
        product.price = price;
        product.stock = stock;
        product.shipping = shipping;
        product.description = description;
        product.images = images;
        product.category = category;
        product.subcategory = subcategory;

        productRepo.save(product).then(
          createdProduct => {
            res.status(200).send({ createdProduct });
          },
        //   () => {
        //     res.sendStatus(500);
        //   }
        );
      }
    );

    return router;
  }
}

export default ProductController;
