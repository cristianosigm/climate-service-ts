import { NestFactory } from '@nestjs/core';
import { RootModule } from './module/root.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  useContainer(app.select(RootModule), { fallbackOnErrors: true });

  await app.listen(process.env.APP_PORT);
}
bootstrap();
