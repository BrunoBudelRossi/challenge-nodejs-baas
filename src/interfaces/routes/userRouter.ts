import { Router } from 'express';
import userController from '@controllers/userController';
import accountRouter from './accountRoutes';
import documentRouter from './documentRouter';

const userRouter = Router({ mergeParams: true });

userRouter.use('/:userId/accounts', accountRouter);
userRouter.use('/:userId/documents', documentRouter);

/**
 * @api {get} /users/ Find All Users
 * @apiHeader {String} Authorization User unique access-key.
 * @apiName findAllUsers
 * @apiGroup User
 *
 * @apiSuccess {String} name Name of the User.
 * @apiSuccess {String} email Email of the User.
 * @apiSuccess {String} password Encrypted passowrd of the User.
 * @apiSuccess {String} _id Id of the User.
 * @apiSuccess {Date} CreatedAt Timestamp when user was created.
 * @apiSuccess {Date} UpdatedAt Timestamp of last update user.
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "status": "success",
 *     "message": "All users returned successfully",
 *     "payload": [
 *       {
 *         "_id": "62bbab7100d0e14f8024f567",
 *         "name": "Teste 1",
 *         "email": "test@gmail.com",
 *         "password": "$2b$10$dvB4F0XHSVzh5lT/77q8o.4h23hQubBdrMmrRUkCvuIapT1GLbkua",
 *         "createdAt": "2022-06-29T01:31:29.400Z",
 *         "updatedAt": "2022-06-29T01:31:29.400Z",
 *         "__v": 0
 *       },
 *       {
 *         "_id": "62bc786517aafc85d1b56255",
 *         "name": "Teste 2",
 *         "email": "test2@gmail.com",
 *         "password": "$2b$10$JzO2o6ihibz70DBwDAi1jOQrOcRrKzzVQtnWagrL7lCikJdba3b9O",
 *         "createdAt": "2022-06-29T16:05:57.215Z",
 *         "updatedAt": "2022-06-29T16:05:57.215Z",
 *         "__v": 0
 *       },
 *     ]
 *   }
 *
 * @apiError Error while find all users.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "status": "error",
 *       "message": "Error while find all users",
 *       "payload": [errors]
 *     }
 */
userRouter.route('/').get(userController.findAllUsers);

/**
 * @api {get} /users/:userId Find User Detail
 * @apiHeader {String} Authorization User unique access-key.
 * @apiName findUserDetail
 * @apiGroup User
 *
 * @apiParam {Number} userId User unique Id.
 *
 * @apiSuccess {String} name Name of the User.
 * @apiSuccess {String} email Email of the User.
 * @apiSuccess {String} password Encrypted passowrd of the User.
 * @apiSuccess {String} _id Id of the User.
 * @apiSuccess {Date} CreatedAt Timestamp when user was created.
 * @apiSuccess {Date} UpdatedAt Timestamp of last update user.
 *
 * @apiSuccess {String} _id Id of the Account.
 * @apiSuccess {String} userId Id of the owner account User.
 * @apiSuccess {String} number Account number.
 * @apiSuccess {String} password Encrypted passowrd of the Account.
 * @apiSuccess {String} balance Account balance.
 * @apiSuccess {Date} CreatedAt Timestamp when user was created.
 * @apiSuccess {Date} UpdatedAt Timestamp of last update user.
 *
 * @apiSuccess {String} _id Id of the Document.
 * @apiSuccess {String} userId Id of the owner document User.
 * @apiSuccess {String} filename Name of file.
 * @apiSuccess {String} path Path where file is storage.
 * @apiSuccess {Date} CreatedAt Timestamp when user was created.
 * @apiSuccess {Date} UpdatedAt Timestamp of last update user.
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "status": "success",
 *     "message": "All user details returned successfully",
 *     "payload": [
 *       "user": {
 *         "_id": "62bbab7100d0e14f8024f567",
 *         "name": "Teste 1",
 *         "email": "test@gmail.com",
 *         "password": "$2b$10$dvB4F0XHSVzh5lT/77q8o.4h23hQubBdrMmrRUkCvuIapT1GLbkua",
 *         "createdAt": "2022-06-29T01:31:29.400Z",
 *         "updatedAt": "2022-06-29T01:31:29.400Z",
 *         "__v": 0
 *       },
 *       "account": {
 *         "_id": "62bbc77e1b13a0f77d1b3e77",
 *         "userId": "62bbab7100d0e14f8024f567",
 *         "number": "123456789",
 *         "password": "$2b$10$oWZNGgcab2j7x.AEj8E6ZuI7sdlceKB5Bvqp7HrR8W80EaEsQYFLu",
 *         "balance": 100,
 *         "createdAt": "2022-06-29T03:31:10.114Z",
 * 	       "updatedAt": "2022-06-29T16:52:52.597Z",
 *         "__v": 0
 *       }
 *       "documents": {
 *         "_id": "62be12450ae882ea17552f86",
 *         "userId": "62bc786517aafc85d1b56255",
 *         "filename": "2022-06-30T21-14-45.230Z - 813690963 - test.txt",
 *         "path": "C:\\ModalAsAService\\challenge-nodejs-baas\\uploads\\2022-06-30T21-14-45.230Z - 813690963 - test.txt",
 *         "createdAt": "2022-06-30T21:14:45.245Z",
 *         "updatedAt": "2022-06-30T21:14:45.245Z",
 *         "__v": 0
 *       }
 *     ]
 *   }
 *
 * @apiError Error while find user details.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "status": "error",
 *       "message": "Error while find user details",
 *       "payload": [errors]
 *     }
 */
userRouter.route('/:userId').get(userController.findUserDetails);

export default userRouter;
