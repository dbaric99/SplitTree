import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/modules/prisma.module';
import { AdminsModule } from 'src/modules/admins.module';
import { EmployeesModule } from 'src/modules/employees.module';
import { JwtStrategy } from './jwt.strategy';

export const jwtSecret = 'zjP9h6ZI5LoSKCRj';

@Module({
  imports: [
    PrismaModule,
    PassportModule,
    JwtModule.register({
      secret: jwtSecret,
      signOptions: { expiresIn: '24h' },
    }),
    AdminsModule,
    EmployeesModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
