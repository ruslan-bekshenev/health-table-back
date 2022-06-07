import express, { Express } from "express";
import cors from "cors";
import session from "express-session";
import passport from 'passport'
class Server {
  public app: Express;
  public routes: { url: string; controller: any }[];
  constructor() {
    this.routes = [];
    this.app = express();
  }

  public configuration() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(
      session({
        resave: false,
        saveUninitialized: true,
        secret: "SECRET",
      })
    );
  }

  public register() {
    this.routes.forEach((route) => {
      this.app.use(route.url, route.controller);
    });
  }

  public addRoute(url: string, controller: any) {
    console.log(this.routes);

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
