import { Employee } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class EmployeeEntity implements Employee {
  id: number;

  guid: string;

  @ApiProperty()
  firstName: string | null;

  @ApiProperty()
  lastName: string | null;

  @ApiProperty({ required: true })
  username: string;

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty()
  profileImg: string | null;

  @ApiProperty({ required: true })
  password: string;

  @ApiProperty({ required: true })
  salt: string;

  @ApiProperty({ required: false, nullable: true })
  roleId: number;

  @ApiProperty()
  companyId: number;
}
