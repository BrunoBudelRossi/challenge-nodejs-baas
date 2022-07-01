import { Router } from 'express';
import authController from '@controllers/authController';

const authRouter = Router();

/**
 * @api {get} /auth/login Login
 * @apiName login
 * @apiGroup Auth
 *
 * @apiParam {String} USERNAME Basic Auth - Email of the User.
 * @apiParam {String} PASSWORD Basic Auth - Password of the User.
 *
 * @apiSuccess {Boolean} auth Flag for success or unauthorized login.
 * @apiSuccess {String} token API Token.
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "status": "success",
 *     "message": "User Logged",
 *     "payload": [
 *       {
 *         "auth": true,
 *         "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmJiYWI3MTAwZDBlMTRmODAyNGY1NjciLCJpYXQiOjE2NTY0Njg5NDl9.IgBHr5ZaMvs3zrIWq8MTh7cmuuQE0IIm0OLVoNNSLMU"
 *     ]
 *   }
 *
 * @apiError Error while login.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "status": "error",
 *       "message": "Error while login",
 *       "payload": [errors]
 *     }
 */
authRouter.route('/login').get(authController.login);

/**
 * @api {get} /auth/logout Logout
 * @apiName logout
 * @apiGroup Auth
 *
 * @apiSuccess {Boolean} auth Flag false.
 * @apiSuccess {String} token null.
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "status": "success",
 *     "message": "success logout",
 *     "payload": [
 *       {
 *         "auth": true,
 *         "token": null
 *     ]
 *   }
 *
 */
authRouter.route('/logout').get(authController.logout);

export default authRouter;
