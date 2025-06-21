import 'dotenv/config';
import { DataSource } from 'typeorm';
import { join } from 'path';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: +(process.env.DB_PORT || 5432),
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'postgres',
  database: process.env.DB_NAME || 'my_app_db',
  synchronize: false,
  logging: true,
  entities: [join(__dirname, '../../modules/**/*.entity.{ts,js}')],
  migrations: [join(__dirname, 'files/*.{ts,js}')],
});
