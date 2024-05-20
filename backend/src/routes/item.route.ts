import { Router } from 'express';
import { findItemById, getAll } from '../repository/ItemRepository';

const itemRouter = Router();

itemRouter.get('/', async (req, res) => {
    try {
        const items = await getAll();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'})
    }
});

export default itemRouter;