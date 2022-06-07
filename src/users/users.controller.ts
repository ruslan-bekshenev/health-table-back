import { CreateUserDto } from "./dto/create-user.dto";

export default class UsersController {
  constructor() {}

  create(dto: CreateUserDto) {
    console.log(dto);
  }
}
