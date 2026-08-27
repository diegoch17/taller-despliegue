import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';
import * as bcrypt from 'bcryptjs';
import { EditarUserDto } from '../dtos/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  //trae todas las filas de la tabla users. Equivale a SELECT * FROM users;
  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }
  //Buscar uno por id
  async findOne(id: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) throw new NotFoundException(`Usuario con id ${id} no encontrado`);
    return user;
  }
  // sirve para crear 
  async create(data: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const nuevoUsuario = this.userRepository.create({ ...data, password: hashedPassword });
    return await this.userRepository.save(nuevoUsuario);
  }
  // esto elimina por el id del usuario 
  async remove(id: string): Promise<void> {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) throw new NotFoundException(`Usuario con id ${id} no encontrado`);
  }
  async update(id: string, editarUserDto: EditarUserDto): Promise<User> {
    const user = await this.findOne(id);
    if(editarUserDto.email && editarUserDto.email !== user.email) {
      const existingUser = await this.userRepository.findOne({ where: { email: editarUserDto.email } });
    }
    Object.assign(user, editarUserDto);
    return this.userRepository.save(user);
  }
}

//Petición HTTP (curl / Swagger / Postman)
        
//users.controller.ts   (recibe, captura datos, define la ruta)
        
//users.service.ts      (ejecuta la acción real contra PostgreSQL con el Repository)
        
//respuesta de vuelta al usuario