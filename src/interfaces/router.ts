import authMiddleware from '@infrastructure/middlewares/authMiddleware';
import { Router } from 'express';
import userController from './controllers/userController';
import accountRouter from './routes/accountRoutes';
import authRouter from './routes/authRoutes';
import documentRouter from './routes/documentRouter';
import userRouter from './routes/userRouter';

const router = Router();
/**
 * @api {post} /users/ Create User
 * @apiName createUser
 * @apiGroup User
 *
 * @apiBody {String} [name] Mandatory Name of the User
 * @apiBody {String} [email] Mandatory Email of the User
 * @apiBody {String} [password] Mandatory Password of the User
 *
 * @apiSuccess {String} name Name of the User.
 * @apiSuccess {String} email Email of the User.
 * @apiSuccess {String} password Encrypted passowrd of the User.
 * @apiSuccess {String} _id Id of the User.
 * @apiSuccess {Date} CreatedAt Timestamp when user was created.
 * @apiSuccess {Date} UpdatedAt Timestamp of last update user.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 Created
 *     {
 *       "status": "success",
 *       "message": "New user created",
 *       "payload": {
 *         "name": "Teste",
 *         "email": "test@gmail.com",
 *         "password": "$2b$10$JzO2o6ihibz70DBwDAi1jOQrOcRrKzzVQtnWagrL7lCikJdba3b9O",
 *         "_id": "62bc786517aafc85d1b56255",
 *         "createdAt": "2022-06-29T16:05:57.215Z",
 *         "updatedAt": "2022-06-29T16:05:57.215Z",
 *         "__v": 0
 *       }
 *     }
 *
 * @apiError Error while create new user.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "status": "error",
 *       "message": "Error while create new user",
 *       "payload": [errors]
 *     }
 */
router.post('/api/users', userController.createUser);
router.use('/api/auth', authRouter);
router.use('/api/users', authMiddleware, userRouter);
router.use('/api/accounts', authMiddleware, accountRouter);
router.use('/api/documents', authMiddleware, documentRouter);

// Request made to non-existent resource
router.use((req, res) => {
    res.status(404).end();
});

export default router;
