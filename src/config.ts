import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    dataBase: {
      url: process.env.DATABASE_URL,

      name: process.env.POSTGRES_DB,

      port: Number(process.env.POSTGRES_PORT || 5432),

      user: process.env.POSTGRES_USER,

      password: process.env.POSTGRES_PASSWORD,

      host: process.env.POSTGRES_HOST,
    },

    jwt: {
      secret: process.env.JWT_SECRET,

      expiresIn: Number(process.env.JWT_EXPIRES_IN || 3600),
    },

    cors: {
      origins: process.env.CORS_ORIGINS
        ? process.env.CORS_ORIGINS.split(',')
        : [],
    },
  };
});