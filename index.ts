import dotenv from "dotenv";
import Database from "./src/database";
import Server from "./src/server";
import UsersController from "./src/users/users.controller";

dotenv.config();

const bootstrap = async () => {
  Database.getInstance().dbConnections.initialize();
  const server = new Server();
  server.start();
  server.addRoute("/api/users", UsersController);
  server.register();
};

bootstrap();
