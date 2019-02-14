import { NextFunction, Request, Response, Router } from "express";
import { Connection, getRepository } from "typeorm";
import { DBConnection } from "../connection";

import { Session, User, Role } from "../entity";

export default abstract class DefaultController {
  public router: Router;

  constructor() {
    this.router = this.initializeRoutes();
  }

  protected abstract initializeRoutes(): Router;

  // Check if user is authenticated and has one of given roles
  protected isAuthenticated(...roles: Role[]) {
    return (req: Request, res: Response, next: NextFunction) => {
      const token: string | undefined = req.get("token");
      if (token) {
        const sessionRepo = getRepository(Session);
        sessionRepo
          .findOne(token, { relations: ["user"] })
          .then((foundSession: Session | undefined) => {
            if (
              foundSession &&
              //foundSession.user.role in roles &&
              foundSession.expiresAt.getTime() > new Date().getTime()
            ) {
              next();
            } else {
              res.sendStatus(403);
            }
          });
      } else {
        res.sendStatus(401);
      }
    };
  }
}
