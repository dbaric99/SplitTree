import { ApiProperty } from '@nestjs/swagger';
import { Flag } from '@prisma/client';

export class CreateCourseDto {
  @ApiProperty({ required: true })
  name: string;

  @ApiProperty({ required: false, nullable: true })
  description: string;

  @ApiProperty({ required: false, default: [] })
  flags: Flag[];

  @ApiProperty({ required: true })
  companyId: number;
}
