import { Database } from "../db";
import { Users } from "./users.entity";

export const UserRepository = Database.getRepository(Users);
