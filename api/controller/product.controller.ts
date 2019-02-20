import DefaultController from "./default.controller";

import { NextFunction, Request, Response, Router } from "express";

import { getRepository } from "typeorm";
import { Session, Product, User, Role, Image } from "../entity";

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
      productRepo.find({where: query, relations: ["images", "category", "subcategory"]}).then((products: Product[]) => {
        res.status(200).send({ products });
      });
    });

    router.route("/api/products").post(
      this.isAuthenticated(Role.EMPLOYEE, Role.ADMIN),
      (req: Request, res: Response) => {
        const productRepo = getRepository(Product);
        const { name, brand, price, stock, shipping, description, imageUrls, categoryId, subcategoryId } = req.body;
        const product = new Product();
        product.name = name;
        product.brand = brand;
        product.price = price;
        product.stock = stock;
        product.shipping = shipping;
        product.description = description;
        product.images = imageUrls.map((imageUrl: string) => {
          const image = new Image();
          image.url = imageUrl;
          return image;
        });
        product.category = categoryId;
        product.subcategory = subcategoryId;

        productRepo.save(product).then(
          createdProduct => {
            res.status(200).send({ product: createdProduct });
          },
          () => {
            res.sendStatus(500);
          }
        );
      }
    );

    router.route("/api/products/:id").put(
      this.isAuthenticated(Role.EMPLOYEE, Role.ADMIN),
      (req: Request, res: Response) => {
        const productRepo = getRepository(Product);
        const id = parseInt(req.params.id);
        productRepo.findOne(id).then((foundProduct: Product | undefined) => {
          if (foundProduct) {
            const { name, brand, price, stock, shipping, description, imageUrls, categoryId, subcategoryId } = req.body;
  
            foundProduct.name = name;
            foundProduct.brand = brand;
            foundProduct.price = price;
            foundProduct.stock = stock;
            foundProduct.shipping = shipping;
            foundProduct.description = description;
            foundProduct.images = imageUrls.map((imageUrl: string) => {
              const image = new Image();
              image.url = imageUrl;
              return image;
            });
            foundProduct.category = categoryId;
            foundProduct.subcategory = subcategoryId;

            // Note: Previous list of images are left in DB with productId set to NULL
            productRepo.save(foundProduct).then(updatedProduct => {
              res.status(200).send({ product: updatedProduct });
            })
          }
          else {
            res.sendStatus(404);
          }
        });
      }
    );

    router.route("/api/product/:id").delete(
      this.isAuthenticated(Role.EMPLOYEE, Role.ADMIN),
      (req: Request, res: Response) => {
        const productRepo = getRepository(Product);
        const id = parseInt(req.params.id);
        productRepo.findOne(id).then(
          (foundProduct: Product | undefined) => {
            if (foundProduct) {
              productRepo.remove(foundProduct).then(() => {
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

export default ProductController;
