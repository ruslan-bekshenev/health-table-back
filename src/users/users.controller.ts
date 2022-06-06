import { Router } from "express";
import { Users } from "./users.entity";
import { UserRepository } from "./users.repository";

export class UserController {
  private userRepository: typeof UserRepository;
  router: Router;

  constructor() {
    this.userRepository = UserRepository;
    this.router = Router();
    this.routes();
  }

  public async getById(request: Request, response: Response): Promise<Users> {
    console.log(request, response);
    // const id = request.params.id;
    try {
      const user = await this.userRepository.find();
      // return res.send(user);
      return user;
    } catch (e) {
      throw new Error("asd");
    }
  }

  public routes() {
    this.router.get("/", this.getById);
  }
}
