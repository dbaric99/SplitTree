import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from 'src/dtos/create-course.dto';
import { UpdateCourseDto } from 'src/dtos/update-course.dto';
import { PrismaService } from './prisma.service';

@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  create(createCourseDto: CreateCourseDto) {
    return this.prisma.course.create({ data: createCourseDto });
  }

  findAll(companyId: number) {
    return this.prisma.course.findMany({ where: { companyId } });
  }

  findOne(id: number) {
    return this.prisma.course.findUnique({ where: { id } });
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return this.prisma.admin.update({
      where: { id },
      data: updateCourseDto,
    });
  }

  remove(id: number) {
    return this.prisma.course.delete({ where: { id } });
  }
}
