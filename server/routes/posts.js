import { Router } from 'express';
import { PostController } from '../controllers/posts.js';

export const postsRouter = Router();

postsRouter.get('/', PostController.getAll);
postsRouter.post('/', PostController.create);
postsRouter.put('/:id', PostController.update);
