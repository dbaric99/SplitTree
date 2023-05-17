import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// TODO set up swagger

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
