import { db } from "$lib/server/db";
import { postsTable, usersTable } from "$lib/server/db/schema";
import type {InsertPost, InsertUser } from "$lib/server/db/schema";

export async function createUser (data: InsertUser) {
    await db.insert(usersTable).values(data);
}

export async function createPost (data: InsertPost) {
    await db.insert(postsTable).values(data);
}