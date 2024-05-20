import { db } from '../config/db'
import { ItemUpdate, Item, NewItem } from '../model/types'

export async function findItemById(id: number) {
    return await db
        .selectFrom('items')
        .where('id', '=', id)
        .selectAll()
        .executeTakeFirst()
}

export async function getAll() {
    return await db
        .selectFrom('items')
        .selectAll()
        .execute()
}