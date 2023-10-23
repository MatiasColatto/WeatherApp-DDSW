import { Injectable } from '@nestjs/common';
import { Users } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUsersDto, UpdateUsersDto } from 'src/dto/user.dto';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(Users) private userRepository: Repository<Users>) {}

  createUser(user: CreateUsersDto) {
    const newuser = this.userRepository.create(user)
    return this.userRepository.save(newuser)
  }

  getUsers(){
    return this.userRepository.find();
  }

  getUser(id: number){
    return this.userRepository.findOne({
      where:{
        id,
      },
    });
  }

  deleteUser(id: number){
    return this.userRepository.delete({ id });
  }

  updateUser(id: number, user: UpdateUsersDto){
    return this.userRepository.update({id}, user)
  }

  findUserByEmail(email:string){
    return this.userRepository.findOneBy({email})
  }

}
