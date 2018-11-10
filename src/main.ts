import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setBasePath('/api')
    .setTitle('Swagger')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('list', 'Find, create, update and remove list')
    .build();
  app.setGlobalPrefix('/api');
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('doc', app, document);

  await app.listen(3000);
}
bootstrap();
