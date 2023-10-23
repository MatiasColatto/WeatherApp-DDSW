import {Entity,Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity({ name:'users'})
export class Users {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true})
  email: string;

  @Column()
  password: string;

}