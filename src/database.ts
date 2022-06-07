import { DataSource, DataSourceOptions } from "typeorm";
import { User } from "./users/users.entity";

export default class Database {
  private static _instance: Database;
  public dbConnections: DataSource;

  private constructor(options: DataSourceOptions) {
    this.dbConnections = new DataSource(options);
  }

  static getInstance() {
    if (this._instance) {
      return this._instance;
    }

    this._instance = new Database({
      type: "postgres",
      host: process.env.POSTGRESS_HOST,
      port: +(process.env.POSTGRESS_PORT ?? 5432),
      username: process.env.POSTGRESS_USERNAME,
      password: process.env.POSTGRESS_PASSWORD,
      database: process.env.POSTGRESS_DB,
      synchronize: true,
      entities: [User],
    });

    return this._instance;
  }
}
