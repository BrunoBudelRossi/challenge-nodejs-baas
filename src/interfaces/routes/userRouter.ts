import { Router } from 'express';
import userController from '@controllers/userController';

const userRouter = Router();

userRouter.route('/').get(userController.findAllUsers);

export default userRouter;
