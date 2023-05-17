import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateAdminDto {
  @IsString()
  @MaxLength(50)
  @ApiProperty()
  firstName: string;

  @IsString()
  @MaxLength(50)
  @ApiProperty()
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

  @IsBoolean()
  @ApiProperty({ required: false, default: false })
  isSuperAdmin: boolean;

  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  companyId: number;
}
