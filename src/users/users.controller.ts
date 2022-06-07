import { Router, Request, Response } from "express";
import { Repository } from "typeorm";
import Database from "../database";
import { CreateUserDto } from "./dto/create-user.dto";
import { User } from "./users.entity";

export default class UsersController {
  public router: Router;
  private userRepository: Repository<User>;

  constructor() {
    this.router = Router();
    this.routes();
    this.userRepository =
      Database.getInstance().dbConnections.getRepository(User);
  }

  public create = async (req: Request, res: Response) => {
    if (!req.body) {
      return res.sendStatus(400);
    }
    const user = await this.userRepository.save(req.body);
    res.json(user);
  };

  public getList = async (req: Request, res: Response) => {
    const users = await this.userRepository.find();
    res.json(users);
  };

  public getById = async (req: Request, res: Response) => {
    if (!req?.params?.id) {
      res.sendStatus(400);
    }
    const user = await this.userRepository.findOneBy({ id: +req?.params?.id });
    res.json(user);
  };

  public routes() {
    this.router.get("/", this.getList);
    this.router.post("/", this.create);
    this.router.get("/:id", this.getById);
  }
}
