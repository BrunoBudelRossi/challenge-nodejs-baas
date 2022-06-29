import { Router } from 'express';
import userController from '@controllers/userController';
import accountRouter from './accountRoutes';

const userRouter = Router({ mergeParams: true });

userRouter.use('/:userId/accounts', accountRouter);

userRouter.route('/').get(userController.findAllUsers);

export default userRouter;