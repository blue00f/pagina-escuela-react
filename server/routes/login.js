import { Router } from 'express';
import { LoginModel } from '../models/mysql/post.js';

export const loginRouter = Router();

loginRouter.post('/', LoginModel.getUser);
