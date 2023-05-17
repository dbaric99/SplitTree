import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from 'src/dtos/create-company.dto';
import { UpdateCompanyDto } from 'src/dtos/update-company.dto';
import { PrismaService } from './prisma.service';

@Injectable()
export class CompaniesService {
  constructor(private prisma: PrismaService) {}

  create(createCompanyDto: CreateCompanyDto) {
    return this.prisma.company.create({ data: createCompanyDto });
  }

  findAll() {
    return this.prisma.company.findMany();
  }

  findOne(id: number) {
    return this.prisma.company.findUnique({ where: { id } });
  }

  update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return this.prisma.company.update({
      where: { id },
      data: updateCompanyDto,
    });
  }

  remove(id: number) {
    return this.prisma.company.delete({ where: { id } });
  }
}
