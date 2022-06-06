import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { Server } from "./src/server";
import { UserController } from "./src/users/users.controller";

dotenv.config();

const bootstrap = async () => {
  const port = +(process.env.PORT ?? 3000);
  const server = new Server(port);
  const database = await server.connect({
    type: "postgres",
    host: process.env.DB_HOST,
    port: +(process.env.DB_PORT ?? 5432),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
  });
  const userController = new UserController()
  console.log(userController.getById());
  
  server.start();
};

bootstrap();
