import { Router } from 'express';
import itemRouter from './item.route';

const routes = Router();

routes.use('/items', itemRouter);

export default routes;