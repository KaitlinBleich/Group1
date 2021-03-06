import cors from "cors";
import express from "express";
import { LoginController, UserController, AboutPageController, ProductController, CategoryController, ServiceController } from "./controller";
import { getRepository } from "typeorm";

import { DBConnection } from "./connection";

export class Server {
  private myApp: Promise<express.Application>;
  constructor() {
    this.myApp = this.buildServer();
  }
  public getMyApp(): Promise<express.Application> {
    return this.myApp;
  }
  protected buildServer(): Promise<express.Application> {
    return DBConnection.getConnection().then(() => {
      UserController.createDefaultAdmin();

      const app: express.Application = express();

      app.use(cors());
      app.use(express.json());
      app.use(express.static("public"));

      app.use("/", new UserController().router);
      app.use("/", new LoginController().router);
      app.use("/", new AboutPageController().router);
      app.use("/", new ProductController().router);
      app.use("/", new CategoryController().router);
      app.use("/", new ServiceController().router);

      return app;
    });
  }

}

export default Server;
