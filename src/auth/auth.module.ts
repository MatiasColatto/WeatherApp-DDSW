import { Module } from '@nestjs/common';
import { authController } from './auth.controller';
import { authService } from './auth.service';
import { UsersModule } from 'src/data/user/user.module';

@Module({
  imports: [UsersModule],
  controllers: [authController],
  providers: [authService],
})
export class AuthModule {}
