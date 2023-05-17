import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class CreateEmployeeDto {
  @ApiProperty({ required: false, nullable: true })
  firstName: string;

  @ApiProperty({ required: false, nullable: true })
  lastName: string;

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true })
  password: string;

  @ApiProperty({ required: false, nullable: true })
  role: Role;

  @ApiProperty({ required: true })
  companyId: number;
}
