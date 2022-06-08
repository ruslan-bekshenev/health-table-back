import { Router } from "express";
import { Repository } from "typeorm";
import Database from "../connection/database";
import { User } from "../users/users.entity";

export class AuthController {
  public router: Router;
  private userRepository: Repository<User>;

  constructor() {
    this.router = Router();
    this.routes();
    this.userRepository =
      Database.getInstance().dbConnections.getRepository(User);
  }

  public signup = async (req: Request, res: Response) => {
    if (req?.body?.email) {
      // return 
    }
  };

  private routes() {}
}
