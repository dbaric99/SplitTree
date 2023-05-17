import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @MaxLength(50)
  @ApiProperty({ required: false, nullable: true })
  firstName: string;

  @IsString()
  @MaxLength(50)
  @ApiProperty({ required: false, nullable: true })
  lastName: string;

  @IsEmail()
  @ApiProperty({ required: true })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: true })
  password: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ required: true })
  salt: string;

  @IsNumber()
  @ApiProperty({ required: false, nullable: true })
  roleId: number;

  @IsNumber()
  @ApiProperty({ required: true })
  companyId: number;
}
