import DefaultController from "./default.controller";

import { NextFunction, Request, Response, Router } from "express";

import { getRepository } from "typeorm";
import { Session, User, Role, Service } from "../entity";

export class ServiceController extends DefaultController {
  protected initializeRoutes(): Router {
    const router = Router();

    router.route("/api/services").get((req: Request, res: Response) => {
      const serviceRepo = getRepository(Service);
      serviceRepo.find().then((services: Service[]) => {
        res.status(200).send({ services });
      });
    });

    router.route("/api/services").post(
      this.isAuthenticated(Role.ADMIN, Role.EMPLOYEE),
      (req: Request, res: Response) => {
        const serviceRepo = getRepository(Service);
        const { title, description, price } = req.body;
        const service = new Service();
        service.title = title;
        service.description = description;
        service.price = price;
        serviceRepo.save(service).then(
          createdService => {
            res.status(200).send({ service: createdService });
          }
        );
      }
    );

    router.route("/api/services/:id").put(
      this.isAuthenticated(Role.EMPLOYEE, Role.ADMIN),
      (req: Request, res: Response) => {
        const serviceRepo = getRepository(Service);
        const id = parseInt(req.params.id);
        serviceRepo.findOne(id).then((foundService: Service | undefined) => {
          if (foundService) {
            const { title, description, price } = req.body;
            foundService.title = title;
            foundService.description = description;
            foundService.price = price;
            serviceRepo.save(foundService).then(updatedService => {
              res.status(200).send({ service: updatedService });
            });
          }
          else {
            res.sendStatus(404);
          }
        });
      }
    );

    router.route("/api/services/:id").delete(
      this.isAuthenticated(Role.EMPLOYEE, Role.ADMIN),
      (req: Request, res: Response) => {
        const serviceRepo = getRepository(Service);
        const id = parseInt(req.params.id);
        serviceRepo.findOne(id).then(
          (foundService: Service | undefined) => {
            if (foundService) {
              serviceRepo.remove(foundService).then(() => {
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

export default ServiceController;
