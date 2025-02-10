import { defineConfig } from '@mikro-orm/postgresql';
import { User } from './src/db/entities/user.entity';
import 'dotenv/config';

export default defineConfig({
  clientUrl: process.env.DATABASE_URL,
  entities: [User],
  baseDir: '.',
  migrations: {
    path: './dist/src/db/migrations',
    pathTs: './src/db/migrations',
  },
  debug: true,
});
