import { Module } from '@nestjs/common';
import { CompaniesService } from 'src/services/companies.service';
import { CompaniesController } from 'src/controllers/companies.controller';
import { PrismaModule } from './prisma.module';

@Module({
  controllers: [CompaniesController],
  providers: [CompaniesService],
  imports: [PrismaModule],
})
export class CompaniesModule {}
