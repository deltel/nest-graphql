import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column("text", { unique: true })
    email: string;

    @Column()
    password: string;

}

export class RegisterInput {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
  }