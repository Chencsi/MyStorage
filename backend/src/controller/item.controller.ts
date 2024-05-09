import { Router, Request, Response } from 'express';
import { Item } from '../model/item';

const itemList: Item[] = [
    {
        id: 1,
        name: 'teszt',
        extension: 'png',
        size: 302
    },
    {
        id: 2,
        name: 'ateszt',
        extension: 'jpg',
        size: 3011
    }
]

const getAll = (req: Request, res: Response) => {
    res.status(200).send(itemList);
}

export default { getAll }