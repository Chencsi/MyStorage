import { Router } from 'express';
import itemController from '../controller/item.controller';

const productRouter = Router();

productRouter.get('/', itemController.getAll);

export default productRouter;