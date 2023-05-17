import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PrismaModule } from './modules/prisma.module';
import { AdminsModule } from './modules/admins.module';
import { CompaniesModule } from './modules/companies.module';
import { CoursesModule } from './modules/courses.module';
import { EmployeesModule } from './modules/employees.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client', 'dist'),
    }),
    PrismaModule,
    AdminsModule,
    CompaniesModule,
    CoursesModule,
    EmployeesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
