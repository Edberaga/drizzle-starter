import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { env } from '$env/dynamic/private';
import { config } from 'dotenv';

config({ path: '.env'});
const client = neon(process.env.DATABASE_URL!);
console.log(client);
export const db = drizzle(client);