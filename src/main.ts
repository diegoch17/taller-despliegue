import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /*
   * Validación global de DTOs
   */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  /*
   * Swagger
   */
  const swaggerConfig = new DocumentBuilder()
    .setTitle('API Auth')
    .setDescription('Documentación de los endpoints de usuarios')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(
    app,
    swaggerConfig,
  );

  SwaggerModule.setup('api', app, document);

  /*
   * Render necesita utilizar process.env.PORT
   */
  const port = Number(process.env.PORT) || 3000;

  await app.listen(port);

  console.log(`Servidor ejecutándose en el puerto ${port}`);
}

bootstrap();