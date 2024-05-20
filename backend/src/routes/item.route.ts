import { Router } from 'express';
import { findItemById, getAll } from '../repository/ItemRepository';

const itemRouter = Router();

itemRouter.get('/', getAll);

export default itemRouter;