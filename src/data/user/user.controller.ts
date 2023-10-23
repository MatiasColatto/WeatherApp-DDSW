import { Body, Controller, Get, Post, Delete, Param , Patch, ParseIntPipe } from '@nestjs/common';
import { Users } from './user.entity';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './user.service';
import { CreateUsersDto, UpdateUsersDto } from 'src/dto/user.dto';

@ApiTags('User')
@Controller('user')
export class UsersController {

    constructor(private userService: UsersService) {}

    @Post()
    createUser(@Body() newUser: CreateUsersDto) : Promise<Users>{
        return this.userService.createUser(newUser);
    }

    @Get()
    getUsers() : Promise<Users[]> {
        return this.userService.getUsers();
    }

    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number): Promise<Users> {
        return this.userService.getUser(id);
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number){
        return this.userService.deleteUser(id);
    }

    @Patch(':id')
    updateUser(@Param('id') id: number, @Body() updatedUser: UpdateUsersDto) {
        return this.userService.updateUser(id, updatedUser);
    }

}
