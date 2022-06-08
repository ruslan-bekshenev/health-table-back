import dotenv from "dotenv";
import Database from "./src/connection/database";
import server from "./src/server";
import UsersController from "./src/users/users.controller";

dotenv.config();

const bootstrap = async () => {
  Database.getInstance().dbConnections.initialize();
  server.start();
  server.configuration();
  server.addRoute("/api/users", new UsersController().router);
  server.register();
};

bootstrap();
