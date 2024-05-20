import {
    ColumnType,
    Generated,
    Insertable,
    JSONColumnType,
    Selectable,
    Updateable
} from 'kysely'

export interface Database {
    items: ItemTable;
}

export interface ItemTable {
    id: Generated<number>;
    name: string;
    extension: string | null;
    size: number;
}

export type Item = Selectable<ItemTable>;
export type NewItem = Insertable<ItemTable>;
export type ItemUpdate = Updateable<ItemTable>;