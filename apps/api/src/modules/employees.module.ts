import { Module } from '@nestjs/common';
import { EmployeesService } from 'src/services/employees.service';
import { EmployeesController } from 'src/controllers/employees.controller';
import { PrismaModule } from './prisma.module';

@Module({
  controllers: [EmployeesController],
  providers: [EmployeesService],
  imports: [PrismaModule],
  exports: [EmployeesService],
})
export class EmployeesModule {}
