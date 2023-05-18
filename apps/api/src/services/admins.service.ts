import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from 'src/dtos/create-admin.dto';
import { UpdateAdminDto } from 'src/dtos/update-admin.dto';
import { PrismaService } from './prisma.service';
import { encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class AdminsService {
  constructor(private prisma: PrismaService) {}

  create(createAdminDto: CreateAdminDto) {
    const { hash, salt } = encodePassword(createAdminDto.password);
    return this.prisma.admin.create({
      data: { ...createAdminDto, password: hash, salt },
    });
  }

  findAll() {
    return this.prisma.admin.findMany();
  }

  findOne(id: number) {
    return this.prisma.admin.findUnique({ where: { id } });
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return this.prisma.admin.update({
      where: { id },
      data: updateAdminDto,
    });
  }

  remove(id: number) {
    return this.prisma.admin.delete({ where: { id } });
  }
}
