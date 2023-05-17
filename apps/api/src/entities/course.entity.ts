import { Course, Flag } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CourseEntity implements Course {
  id: number;

  guid: string;

  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: false, nullable: true })
  description: string;

  @ApiProperty({ required: false, default: [] })
  flags: Flag[];

  @ApiProperty({ required: true })
  companyId: number;
}
