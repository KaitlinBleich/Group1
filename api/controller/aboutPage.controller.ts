import DefaultController from "./default.controller";

import express, { Request, Response } from "express";
import { getRepository } from "typeorm";

import { Session, User, About, Role } from "../entity";

export class AboutPageController extends DefaultController {
  protected initializeRoutes(): express.Router {
    const router = express.Router();

    router.route("/api/about").get((req: Request, res: Response) => {
        const aboutRepo = getRepository(About);
        aboutRepo
            .findOne(1, {relations: ["image"]})
            .then((about: About | undefined) => {
                if (about) {
                    res.status(200).send(about);
                }
                else {
                    res.sendStatus(404);
                }
            });
    });

    router.route("/api/about").post(
        this.isAuthenticated(Role.EMPLOYEE, Role.ADMIN),
        (req: Request, res: Response) => {
            const { greeting, description, location, hours, image } = req.body;
            const about = new About();
            about.id = 1;
            about.greeting = greeting;
            about.description = description;
            about.location = location;
            about.hours = hours;
            about.image = image;
            const aboutRepo = getRepository(About);
            aboutRepo.save(about).then(
                (createdAbout: About) => {
                    res.sendStatus(200);
                },
                (reason: any) => {
                    console.log(reason);
                    res.sendStatus(500);
                }
            );
        }
    );

    return router;
  }
}

export default AboutPageController;
