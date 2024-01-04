import { Gender, Role } from "src/enum/enum";

export class CreateUserDto {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    phone: string;
    created_at?: Date;
    Role: Role;
    birthday?: Date;
    gender: Gender;
}
