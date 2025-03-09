import { eq } from "drizzle-orm";
import { db } from "$lib/server/db";
import type { SelectPost } from "$lib/server/db/schema";
import { postsTable } from "$lib/server/db/schema";

export async function updatePost(id: SelectPost['id'], data: Partial<Omit<SelectPost, 'id'>>) {
    await db.update(postsTable).set(data).where(eq(postsTable.id, id));
  }