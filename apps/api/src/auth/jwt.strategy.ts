import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtSecret } from './auth.module';
import { AdminsService } from 'src/services/admins.service';
import { EmployeesService } from 'src/services/employees.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private adminsService: AdminsService,
    private employeesService: EmployeesService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret,
    });
  }

  async validate(payload: { userId: number }) {
    const user =
      (await this.adminsService.findOne(payload.userId)) ||
      (await this.employeesService.findOne(payload.userId));

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
