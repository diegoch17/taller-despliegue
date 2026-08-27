import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigType } from '@nestjs/config';
import config from '../config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],

      useFactory: (configType: ConfigType<typeof config>) => {
        const {
          url,
          user,
          host,
          name,
          password,
          port,
        } = configType.dataBase;

        /*
         * ==========================================
         * RENDER / NEON / BASE DE DATOS EN LA NUBE
         * ==========================================
         */

        if (url) {
          return {
            type: 'postgres',
            url,

            synchronize: false,

            autoLoadEntities: true,

            ssl: {
              rejectUnauthorized: false,
            },
          };
        }

        /*
         * ==========================================
         * POSTGRESQL LOCAL
         * ==========================================
         */

        if (!host || !user || !name) {
          throw new Error(
            'Faltan variables de PostgreSQL. Verifica POSTGRES_HOST, POSTGRES_USER y POSTGRES_DB.',
          );
        }

        return {
          type: 'postgres',

          host,

          port: port || 5432,

          username: user,

          password: password || '',

          database: name,

          synchronize: false,

          autoLoadEntities: true,
        };
      },
    }),
  ],

  providers: [],

  exports: [TypeOrmModule],
})
export class DatabaseModule {}