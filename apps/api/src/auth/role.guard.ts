import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwtService: JwtService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];

    if (!token) {
      return false;
    }

    const decodedToken = this.jwtService.verify(token);

    if (!decodedToken) {
      return false;
    }

    const isAdmin = decodedToken.isAdmin;
    const isSuperAdmin = decodedToken.isSuperAdmin;

    if (roles.includes('admin') && isAdmin) {
      return true;
    }

    if (roles.includes('superadmin') && isSuperAdmin) {
      return true;
    }

    return false;
  }
}
