import express, { Express } from "express";
import cors from "cors";
import session from "express-session";
import cookieParser from "cookie-parser";
import { corsOptions } from "./cors";
class Server {
  public app: Express;
  public routes: { url: string; controller: any }[];
  constructor() {
    this.routes = [];
    this.app = express();
  }

  public configuration() {
    this.app.use(express.json());
    this.app.use(cookieParser());
    this.app.use(cors(corsOptions));
  }

  public register() {
    this.routes.forEach((route) => {
      this.app.use(route.url, route.controller);
    });
  }

  public addRoute(url: string, controller: any) {
    this.routes.push({ url, controller });
  }

  public start() {
    const port = process.env.PORT || 5000;

    this.app.listen(port, () => {
      console.log(`Server is listening ${port} port.`);
    });
  }
}

export default new Server();
