import { eq } from "drizzle-orm";
import { db } from "$lib/server/db";
import type { SelectUser, SelectPost } from "$lib/server/db/schema";
import { postsTable, usersTable } from "$lib/server/db/schema";

export async function deleteUser(id: SelectUser['id']) {
    await db.delete(usersTable).where(eq(usersTable.id, id));
}

export async function deletePost(id: SelectPost['id']) {
    await db.delete(postsTable).where(eq(postsTable.id, id));
}