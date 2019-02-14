import DefaultController from "./default.controller";

import { NextFunction, Request, Response, Router } from "express";
import multer from "multer";
import Path from "path";

import { getRepository } from "typeorm";
import { Session, User } from "../entity";

export class UserController extends DefaultController {
  protected initializeRoutes(): Router {
    const router = Router();
    router
      .route("/users")
      .get((req: Request, res: Response) => {
        const userRepo = getRepository(User);
        userRepo.find().then((users: User[]) => {
          res.status(200).send({ users });
        });
      })
      .post((req: Request, res: Response) => {
        const userRepo = getRepository(User);
        const { firstName, lastName, username, password, role } = req.body;
        const user = new User();
        user.username = username;
        user.firstName = firstName;
        user.lastName = lastName;
        user.password = password;
        user.role = role;
        userRepo.save(user).then(
          createdUser => {
            res.status(200).send({ createdUser });
          },
          (reason: any) => {
            res.status(500).send({ reason: "The username was not unique" });
          }
        );
      });
    router.route("/users/:id").post(
      this.isAuthenticated(true),
      multer({
        dest: Path.join(__dirname, "..", "public", "profilePhotos")
      }).single("profilePhoto"),
      (req: Request, res: Response) => {
        const userRepo = getRepository(User);
        userRepo.findOne(req.params.id).then((user: User | undefined) => {
          if (user) {
            if (req.file) {
              //user.profileUrl = `profilePhotos/${req.file.filename}`;
              userRepo.save(user).then((savedUser: User) => {
                res.send({ user: savedUser });
              });
            } else {
              res.sendStatus(500);
            }
          } else {
            res.sendStatus(500);
          }
        });
      }
    );
    router.route("/users/:id").get((req: Request, res: Response) => {
      const userRepo = getRepository(User);
      userRepo.findOne(req.params.id).then(
        (user: User | undefined) => {
          if (user) {
            res.send({ user });
          } else {
            res.sendStatus(404);
          }
        },
        () => {
          res.sendStatus(404);
        }
      );
    });
    return router;
  }
}

export default UserController;
