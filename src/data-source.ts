import 'dotenv/config';
import { DataSource } from 'typeorm';
import { User } from './users/entities/user.entity';

const databaseUrl = process.env.DATABASE_URL;

const AppDataSource = new DataSource({
  type: 'postgres',

  /*
   * ==========================================
   * RENDER / NEON
   * ==========================================
   */

  ...(databaseUrl
    ? {
        url: databaseUrl,

        ssl: {
          rejectUnauthorized: false,
        },
      }

    /*
     * ==========================================
     * POSTGRESQL LOCAL
     * ==========================================
     */

    : {
        host: process.env.POSTGRES_HOST || 'localhost',

        port: Number(process.env.POSTGRES_PORT || 5432),

        username: process.env.POSTGRES_USER,

        password: process.env.POSTGRES_PASSWORD,

        database: process.env.POSTGRES_DB,
      }),

  /*
   * IMPORTANTE:
   * Las tablas se manejan mediante migraciones.
   */
  synchronize: false,

  logging: true,

  entities: [User],

  migrations: ['src/database/migrations/*.ts'],
});

export default AppDataSource;
export { AppDataSource };
