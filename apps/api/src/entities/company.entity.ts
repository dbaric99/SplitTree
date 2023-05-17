import { Company, Admin, Employee, Course } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CompanyEntity implements Company {
  id: number;

  guid: string;

  @ApiProperty({ required: true })
  name: string;

  admins: Admin[];

  employees: Employee[];

  courses: Course[];
}
