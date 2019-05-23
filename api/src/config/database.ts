export default {
  host: process.env.DB_HOST,
  type: 'mysql',
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['src/**/*.entity{.ts,.js}'],
  synchronize: process.env.DB_SYNCRONIZE === 'true',
  logging: process.env.DB_LOGGING === 'true',
};
