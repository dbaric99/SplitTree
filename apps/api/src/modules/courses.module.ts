import { Module } from '@nestjs/common';
import { CoursesService } from 'src/services/courses.service';
import { CoursesController } from 'src/controllers/courses.controller';
import { PrismaModule } from './prisma.module';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService],
  imports: [PrismaModule],
})
export class CoursesModule {}
