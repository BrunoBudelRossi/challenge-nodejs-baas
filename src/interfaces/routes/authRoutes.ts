import { Router } from 'express';
import authController from '@controllers/authController';

const authRouter = Router();

authRouter.route('/login').get(authController.login);

authRouter.route('/logout').get(authController.logout);

export default authRouter;
