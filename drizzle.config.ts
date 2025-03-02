import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';

config({ path: '.env'});

export default defineConfig({
	schema: './src/lib/server/db/schema.ts',
	out: './migrations',
	dbCredentials: {
		url: process.env.DATABASE_URL
	},

	verbose: true,
	strict: true,
	dialect: 'postgresql'
});
