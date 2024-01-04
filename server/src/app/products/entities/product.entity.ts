import { User } from "src/app/users/entities/user.entity";
import { Gender } from "../../../enum/enum";
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: Number

    @Column({
        nullable: false,
        length: 50,
        type: 'varchar'
    })
    title: String

    @Column({
        nullable: false,
        type: 'longtext'
    })
    description: String

    @Column({
        type: 'varchar',
        length: 40,
        nullable: false
    })

    @CreateDateColumn()
    created_At: Date;

    @Column({
        type: 'float',
        nullable: false
    })
    size: Number;

    @ManyToOne(() => User, (user) => user.id)
    created_by: User;

    // PG

    // @Column({
    //     type: "enum",
    //     enum: Gender,
    //     default: Gender.MALE
    // })
    // role: Gender;

    @Column('int')
    gender: Gender

}
