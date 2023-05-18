import { Module } from '@nestjs/common';
import { AdminsService } from 'src/services/admins.service';
import { AdminsController } from 'src/controllers/admins.controller';
import { PrismaModule } from './prisma.module';

@Module({
  controllers: [AdminsController],
  providers: [AdminsService],
  imports: [PrismaModule],
  exports: [AdminsService],
})
export class AdminsModule {}
