import { defineConfig, env } from 'prisma/config';

try {
  require('dotenv').config();
} catch (e) {
}

export default defineConfig({
  datasource: {
    url: env('DATABASE_URL') || "postgresql://user:pass@localhost:5432/db",
  },
});
