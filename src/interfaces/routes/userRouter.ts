import { Router } from 'express';
import userController from '@controllers/userController';
import accountRouter from './accountRoutes';
import documentRouter from './documentRouter';

const userRouter = Router({ mergeParams: true });

userRouter.use('/:userId/accounts', accountRouter);
userRouter.use('/:userId/documents', documentRouter);

userRouter.route('/').get(userController.findAllUsers);
userRouter.route('/:userId').get(userController.findUserDetails);

export default userRouter;
