import { NestFactory } from '@nestjs/core';
import type { NestFastifyApplication } from '@nestjs/platform-fastify';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { CoreModule } from './core.module.js';

const bootstrap = async () => {
  const app = await NestFactory.create<NestFastifyApplication>(CoreModule, new FastifyAdapter());
  const cfg = new DocumentBuilder()
    .setTitle('Board')
    .setDescription('User management board')
    .setVersion('1.0')
    .addTag('authentication')
    .addTag('authorization')
    .addTag('oidc')
    .addTag('oauth')
    .addTag('uma')
    .build();

  const doc = SwaggerModule.createDocument(app, cfg);
  SwaggerModule.setup('spec', app, doc);

  await app.listen(3000);
};

bootstrap();
