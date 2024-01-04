import { Controller, Get, Post, Body, Param, Delete, Res, ParseIntPipe, HttpStatus, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post()
  async create(@Body() createUserDto: CreateUserDto, @Res() res: Response): Promise<Response> {

    try {

      const newUser = await this.usersService.create(createUserDto);
      return res.status(HttpStatus.OK).json(newUser)

    } catch (error) {
      throw error
    }

  }

  @Get()
  async findAll(@Res() res: Response): Promise<Response> {

    try {

      const users = await this.usersService.findAll();
      return res.status(HttpStatus.OK).json(users)

    } catch (error) {
      throw error
    }

  }

  @Get(':id')
  async findOne(@Res() res: Response, @Param('id', ParseIntPipe) id: number): Promise<Response> {
    const user = await this.usersService.findOne(id);
    return res.status(HttpStatus.OK).json(user)
  }

  @Delete(':id')
  async remove(@Res() res: Response, @Param('id', ParseIntPipe) id: number): Promise<Response> {
    await this.usersService.remove(id);
    return res.status(HttpStatus.OK).json({ message: "User was removed successfully" })
  }
}
