import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from './entity/auth.entity';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async login(email: string, password: string): Promise<AuthEntity> {
    const admin = await this.prisma.admin.findUnique({
      where: { email: email },
    });
    const employee = await this.prisma.employee.findUnique({
      where: { email: email },
    });

    if (!employee && !admin) {
      throw new NotFoundException(`No user found for email: ${email}`);
    }

    const isAdmin = !!admin;

    const isPasswordValid = isAdmin
      ? admin.password === password
      : employee.password === password;

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    return {
      accessToken: this.jwtService.sign({
        userId: isAdmin ? admin.id : employee.id,
      }),
      isAdmin: isAdmin,
      isSuperAdmin: isAdmin ? admin.isSuperAdmin : false,
    };
  }
}
