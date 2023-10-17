import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

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

    @Column({
        nullable: false,
        type: 'datetime'
    })
    created_at: String

    @Column({
        nullable: false,
        type: 'int'
    })
    role: Number

    @Column({
        nullable: false,
        type: 'date'
    })
    birthday: String

    @Column({
        nullable: false,
        type: 'int'
    })
    gender: Number

}
