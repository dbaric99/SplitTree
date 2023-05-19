import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from './entity/auth.entity';
import { encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async login(username: string, password: string): Promise<AuthEntity> {
    const admin = await this.prisma.admin.findUnique({
      where: { username: username },
    });
    const employee = await this.prisma.employee.findUnique({
      where: { username: username },
    });

    if (!employee && !admin) {
      throw new NotFoundException(`No user found for username: ${username}`);
    }

    const isAdmin = !!admin;

    const isPasswordValid = isAdmin
      ? admin.password === encodePassword(password, admin.salt).hash
      : employee.password === encodePassword(password, employee.salt).hash;

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    return {
      accessToken: this.jwtService.sign({
        userId: isAdmin ? admin.id : employee.id,
      }),
      isAdmin: isAdmin,
      isSuperAdmin: isAdmin ? admin.isSuperAdmin : false,
      id: isAdmin ? admin.id : employee.id,
      guid: isAdmin ? admin.guid : employee.guid,
      username: isAdmin ? admin.username : employee.username,
      firstName: isAdmin ? admin.firstName : employee.firstName,
      lastName: isAdmin ? admin.lastName : employee.lastName,
      profileImg: isAdmin ? admin.profileImg : employee.profileImg,
    };
  }
}
