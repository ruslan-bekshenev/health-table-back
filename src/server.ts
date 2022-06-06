import express from "express";
import { DataSource, DataSourceOptions } from "typeorm";
import { UserController } from "./users/users.controller";

export class Server {
  private app: express.Application;
  static Database: DataSource;
  constructor(port: number) {
    this.app = express();
    this.configuration(port);
  }

  public configuration(port: number) {
    this.app.set("port", port);
  }

  public connect(options: DataSourceOptions) {
    if (!Server.Database) {
      Server.Database = new DataSource(options);
    }
    return Server.Database;
  }

  public routes(routes) {
    this.app.use(`/api/users`, new UserController.router)
  }

  public start() {
    const port = this.app.get("port");
    this.app.listen(port, () => {
      console.log(`[server]: Server is runnig at http://localhost:${port}/`);
    });
  }
}
