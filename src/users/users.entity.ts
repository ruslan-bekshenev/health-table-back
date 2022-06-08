import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: false })
  email: string;

  @Column()
  password: string;

  @Column({ type: "boolean", default: false })
  isActivated: boolean;

  @Column()
  activationLink: string;
}
