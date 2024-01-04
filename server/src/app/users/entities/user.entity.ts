import { Gender, Role } from "../../../enum/enum";
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: Number

    @Column({
        nullable: false,
        length: 40,
        type: 'varchar'
    })
    name: String

    @Column({
        nullable: false,
        length: 40,
        type: 'varchar'
    })
    surname: String

    @Column({
        nullable: false,
        type: 'varchar',
        unique: true
    })
    email: String

    @Column({
        nullable: false,
        type: 'longtext'
    })
    password: String

    @Column({
        nullable: false,
        length: 15,
        type: 'varchar'
    })
    phone: String

    @CreateDateColumn()
    created_At: Date;

    @Column('int')
    role: Role

    @CreateDateColumn()
    birthday: Date;

    @Column('int')
    gender: Gender

}
