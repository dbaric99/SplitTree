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
  email: string;

  @ApiProperty({ required: true })
  password: string;

  @ApiProperty({ required: false, nullable: true })
  roleId: number;

  @ApiProperty()
  companyId: number;
}
