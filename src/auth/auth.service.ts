import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/data/user/user.service';
import { RegisterDto } from './dto/register.dto';
import * as bcryptjs from 'bcryptjs';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class authService {

    constructor
    (private usersService: UsersService){}
    

    async register({email , password}: RegisterDto){

        const user = await this.usersService.findUserByEmail(email);

        if(user){
            throw new BadRequestException ('User already exists');
        }

        return await this.usersService.createUser({
            email,
            password: await bcryptjs.hash(password,10)
        })
    }

    async login({email, password} : LoginDto){
        const user = await this.usersService.findUserByEmail(email);
        if(!user){
            throw new UnauthorizedException('email is wrong')
        }

        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if (!isPasswordValid){
            throw new UnauthorizedException('password is wrong');
        }

        return user;
    }

}
