import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from 'src/dtos/create-employee.dto';
import { UpdateEmployeeDto } from 'src/dtos/update-employee.dto';
import { PrismaService } from './prisma.service';
import { encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class EmployeesService {
  constructor(private prisma: PrismaService) {}

  create(createEmployeeDto: CreateEmployeeDto) {
    const { hash, salt } = encodePassword(createEmployeeDto.password);
    return this.prisma.employee.create({
      data: { ...createEmployeeDto, password: hash, salt },
    });
  }

  findAll() {
    return this.prisma.employee.findMany();
  }

  findOne(id: number) {
    return this.prisma.employee.findUnique({ where: { id } });
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return this.prisma.employee.update({
      where: { id },
      data: updateEmployeeDto,
    });
  }

  remove(id: number) {
    return this.prisma.employee.delete({ where: { id } });
  }
}
