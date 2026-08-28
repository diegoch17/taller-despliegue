import 'dotenv/config';
import { DataSource } from 'typeorm';
import { User } from './users/entities/user.entity';

const databaseUrl = process.env.DATABASE_URL;

const AppDataSource = new DataSource({
  type: 'postgres',

  ...(databaseUrl
    ? {
        url: databaseUrl,
        ssl: {
          rejectUnauthorized: false,
        },
      }
    : {
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 5432,
        username: process.env.DB_USERNAME || 'root',
        password: process.env.DB_PASSWORD || 'rootpassword',
        database: process.env.DB_DATABASE || 'auth_db',
      }),

  synchronize: false,
  logging: true,
  entities: [User],
  migrations: ['src/database/migrations/**/*.ts'],
});

export default AppDataSource;