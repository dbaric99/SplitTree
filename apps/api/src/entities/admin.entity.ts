import { Admin } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class AdminEntity implements Admin {
  @ApiProperty()
  id: number;

  @ApiProperty()
  guid: string;

  @ApiProperty()
  firstName: string | null;

  @ApiProperty()
  lastName: string | null;

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  password: string;

  @ApiProperty({ required: false, default: false })
  isSuperAdmin: boolean | false;

  @ApiProperty()
  companyId: number;
}