import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminsController } from './admins.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [AdminsController],
  providers: [AdminsService],
  imports: [PrismaModule],
})
export class AdminsModule {}
