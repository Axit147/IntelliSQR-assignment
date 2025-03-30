import { Router } from 'express';
import { login } from '../controllers/login';
import { signup } from '../controllers/signup';

const authRouter = Router();

authRouter.post('/login', login);
authRouter.post('/signup', signup);

export default authRouter;
