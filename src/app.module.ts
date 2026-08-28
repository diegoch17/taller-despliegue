import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';

import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,

      load: [config],

      envFilePath: ['.env'],

      validationSchema: Joi.object({
        /*
         * ==========================================
         * SERVIDOR
         * ==========================================
         */

        PORT: Joi.number().default(3000),

        NODE_ENV: Joi.string()
          .valid('dev', 'stg', 'prod', 'development', 'production')
          .default('dev'),

        /*
         * ==========================================
         * BASE DE DATOS
         * ==========================================
         */

        DATABASE_URL: Joi.string().optional(),

        POSTGRES_HOST: Joi.string().optional(),

        POSTGRES_PORT: Joi.number().default(5432),

        POSTGRES_USER: Joi.string().optional(),

        POSTGRES_PASSWORD: Joi.string().allow('').optional(),

        POSTGRES_DB: Joi.string().optional(),

        /*
         * ==========================================
         * JWT
         * ==========================================
         */

        JWT_SECRET: Joi.string().optional(),

        JWT_EXPIRES_IN: Joi.number().default(3600),

        /*
         * ==========================================
         * CORS
         * ==========================================
         */

        CORS_ORIGINS: Joi.string().optional(),
      }),

      /*
       * Tiene que existir una de estas dos opciones:
       *
       * DATABASE_URL
       *
       * o
       *
       * POSTGRES_HOST
       */
      validationOptions: {
        allowUnknown: true,
        abortEarly: false,
      },
    }),

    DatabaseModule,

    UsersModule,
  ],

  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}