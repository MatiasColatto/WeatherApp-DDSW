import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty , MinLength, IsEmail, IsUUID, isInt, IsNumber } from 'class-validator';

export class CreateUsersDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty()
  password: string;

}
export class UpdateUsersDto {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @MinLength(8)
  @ApiProperty()
  password: string;

}
