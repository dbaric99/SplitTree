import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CompaniesController],
  providers: [CompaniesService],
  imports: [PrismaModule],
})
export class CompaniesModule {}
