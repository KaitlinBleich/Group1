import DefaultController from "./default.controller";

import { NextFunction, Request, Response, Router } from "express";

import { getRepository } from "typeorm";
import { Session, User, Role } from "../entity";

export class UserController extends DefaultController {
  protected initializeRoutes(): Router {
    const router = Router();

    router.route("/api/users").get(
      this.isAuthenticated(Role.ADMIN),
      (req: Request, res: Response) => {
      const userRepo = getRepository(User);
      userRepo.find().then((users: User[]) => {
        res.status(200).send({ users });
      });
    });

    router.route("/api/users").post(
      this.isAuthenticated(Role.ADMIN),
      (req: Request, res: Response) => {
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
            res.status(200).send({ user: createdUser });
          },
          (reason: any) => {
            res.status(500).send({ reason: "The username was not unique" });
          }
        );
      }
    );

    router.route("/api/users/:id").put(
      this.isAuthenticated(Role.EMPLOYEE, Role.ADMIN),
      (req: Request, res: Response) => {
        const userRepo = getRepository(User);
        const userId = parseInt(req.params.id, 10);
        userRepo.findOne(userId).then((foundUser: User | undefined) => {
          if (foundUser) {
            const { firstName, lastName, username, password, role } = req.body;

            // Only let a user change their own info, unless they're an admin
            if (res.locals.foundUser.id == userId || res.locals.foundUser.role == Role.ADMIN) {
              foundUser.username = username;
              foundUser.firstName = firstName;
              foundUser.lastName = lastName;
              foundUser.password = password;
            }
            if (res.locals.foundUser.role == Role.ADMIN) {
              foundUser.role = role;
            }

            userRepo.save(foundUser)
              .then(() => {
                res.status(200).send({ user: foundUser })
              })
              .catch(() => res.sendStatus(500));
          }
          else {
            res.sendStatus(404);
          }
        });
      }
    );

    router.route("/api/users/:id").get((req: Request, res: Response) => {
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

    router.route("/api/users/:id").delete(
      this.isAuthenticated(Role.ADMIN),
      (req: Request, res: Response) => {
        const userRepo = getRepository(User);
        const userId = parseInt(req.params.id, 10);
        userRepo.findOne(userId).then(
          (user: User | undefined) => {
            if (user) {
              userRepo.remove(user).then(() => {
                res.sendStatus(200);
              });
            }
            else {
              res.sendStatus(404);
            }
          }
        );
          
      }
    );

    return router;
  }

  // Create an admin if none already exists
  public static createDefaultAdmin() {
    const admin = new User();
    admin.firstName = "Default";
    admin.lastName = "Admin";
    admin.username = "admin";
    admin.password = "password";
    admin.role = Role.ADMIN;

    const userRepo = getRepository(User);
    userRepo
      .findOne({where: {role: Role.ADMIN}})
      .then((existingAdmin: User | undefined) => {
        if (!existingAdmin) {
          userRepo.save(admin).then((savedAdmin: User) => {
            console.log("Created default admin:", savedAdmin);
          });
        }
      });
  }
}

export default UserController;
