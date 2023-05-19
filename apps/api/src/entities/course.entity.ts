import { ApiProperty } from '@nestjs/swagger';
import { Course } from '@prisma/client';

export class CourseEntity implements Course {
  id: number;

  guid: string;

  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: true })
  description: string;

  @ApiProperty({ required: true })
  companyId: number;

  @ApiProperty({ required: false, nullable: true })
  coverUrl: string | null;
}
