import { ApiProperty } from '@nestjs/swagger';

export class AuthEntity {
  @ApiProperty()
  accessToken: string;

  @ApiProperty()
  isAdmin: boolean;

  @ApiProperty()
  isSuperAdmin: boolean;
}
