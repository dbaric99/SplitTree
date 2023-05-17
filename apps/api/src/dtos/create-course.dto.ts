import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCourseDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: true })
  name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: true })
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({ required: true })
  companyId: number;
}
