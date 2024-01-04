import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { DeleteResult, Equal, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(User) private userRepository: Repository<User>) { }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const response = await this.userRepository.create(createUserDto)
    return await this.userRepository.save(response)
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find()
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepository.findOneBy({ id: Equal(id) })
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.userRepository.delete(id)
  }
}
