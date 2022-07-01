import { Router } from 'express';
import accountController from '@controllers/accountController';

const accountRouter = Router({ mergeParams: true });

accountRouter
    .route('/')
    /**
     * @api {get} /accounts/ Find All Accounts
     * @apiHeader {String} Authorization User unique access-key.
     * @apiName findAllAccounts
     * @apiGroup Account
     *
     * @apiSuccess {String} _id Id of the Account.
     * @apiSuccess {String} userId Id of the owner account User.
     * @apiSuccess {String} number Account number.
     * @apiSuccess {String} password Encrypted passowrd of the Account.
     * @apiSuccess {String} balance Account balance.
     * @apiSuccess {Date} CreatedAt Timestamp when user was created.
     * @apiSuccess {Date} UpdatedAt Timestamp of last update user.
     *
     * @apiSuccessExample Success-Response:
     *   HTTP/1.1 200 OK
     *   {
     *     "status": "success",
     *     "message": "All accounts returned successfully",
     *     "payload": [
     *       {
     *         "_id": "62bbc77e1b13a0f77d1b3e77",
     *         "userId": "62bbab7100d0e14f8024f567",
     *         "number": "123456789",
     *         "password": "$2b$10$oWZNGgcab2j7x.AEj8E6ZuI7sdlceKB5Bvqp7HrR8W80EaEsQYFLu",
     *         "balance": 100,
     *         "createdAt": "2022-06-29T03:31:10.114Z",
     * 	       "updatedAt": "2022-06-29T16:52:52.597Z",
     *         "__v": 0
     *       },
     *       {
     *         "_id": "62bc787717aafc85d1b56258",
     *         "userId": "62bc786517aafc85d1b56255",
     *         "number": "987654321",
     *         "password": "$2b$10$mJGkHKLH7IL27AYoYGSqfOwv.TnZ6XXvgn986BrR9r.4FNTCcLrPK",
     *         "balance": 800,
     *         "createdAt": "2022-06-29T16:06:15.643Z",
     * 	       "updatedAt": "2022-06-29T16:52:52.565Z",
     *         "__v": 0
     *       },
     *     ]
     *   }
     *
     * @apiError Error while find all accounts.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 500 Internal Server Error
     *     {
     *       "status": "error",
     *       "message": "Error while find all accounts",
     *       "payload": [errors]
     *     }
     */
    .get(accountController.findAllAccounts)

    /**
     * @api {post} /users/:userId/accounts Create Account
     * @apiHeader {String} Authorization User unique access-key.
     * @apiName createAccount
     * @apiGroup Account
     *
     * @apiParam {Number} userId User unique Id.
     *
     * @apiBody {String} [number] Mandatory Number of the Account
     * @apiBody {String} [password] Mandatory Password of the Account
     * @apiBody {Number} [balance] Mandatory Balance of the Account
     *
     * @apiSuccess {String} _id Id of the Account.
     * @apiSuccess {String} userId Id of the owner account User.
     * @apiSuccess {String} number Account number.
     * @apiSuccess {String} password Encrypted passowrd of the Account.
     * @apiSuccess {String} balance Account balance.
     * @apiSuccess {Date} CreatedAt Timestamp when user was created.
     * @apiSuccess {Date} UpdatedAt Timestamp of last update user.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 201 Created
     *     {
     *       "status": "success",
     *       "message": "New account created",
     *       "payload": {
     *         "_id": "62bbc77e1b13a0f77d1b3e77",
     *         "userId": "62bbab7100d0e14f8024f567",
     *         "number": "123456789",
     *         "password": "$2b$10$oWZNGgcab2j7x.AEj8E6ZuI7sdlceKB5Bvqp7HrR8W80EaEsQYFLu",
     *         "balance": 100,
     *         "createdAt": "2022-06-29T03:31:10.114Z",
     * 	       "updatedAt": "2022-06-29T16:52:52.597Z",
     *         "__v": 0
     *     }
     *
     * @apiError Error while create new account.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 500 Internal Server Error
     *     {
     *       "status": "error",
     *       "message": "Error while create new account",
     *       "payload": [errors]
     *     }
     */
    .post(accountController.createAccount);

/**
 * @api {get} /accounts/:accountId/getDetails Find Account Details
 * @apiHeader {String} Authorization User unique access-key.
 * @apiName findAccountDetails
 * @apiGroup Account
 *
 * @apiParam {Number} accountId Account unique Id.
 *
 * @apiSuccess {String} _id Id of the Account.
 * @apiSuccess {String} userId Id of the owner account User.
 * @apiSuccess {String} number Account number.
 * @apiSuccess {String} password Encrypted passowrd of the Account.
 * @apiSuccess {String} balance Account balance.
 * @apiSuccess {Date} CreatedAt Timestamp when user was created.
 * @apiSuccess {Date} UpdatedAt Timestamp of last update user.
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "status": "success",
 *     "message": "Account details returned successfully",
 *     "payload": [
 *       {
 *         "_id": "62bbc77e1b13a0f77d1b3e77",
 *         "userId": "62bbab7100d0e14f8024f567",
 *         "number": "123456789",
 *         "password": "$2b$10$oWZNGgcab2j7x.AEj8E6ZuI7sdlceKB5Bvqp7HrR8W80EaEsQYFLu",
 *         "balance": 100,
 *         "createdAt": "2022-06-29T03:31:10.114Z",
 * 	       "updatedAt": "2022-06-29T16:52:52.597Z",
 *         "__v": 0
 *       },
 *     ]
 *   }
 *
 * @apiError Error while get account details.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "status": "error",
 *       "message": "Error while get account details",
 *       "payload": [errors]
 *     }
 */
accountRouter
    .route('/:accountId/getDetails')
    .get(accountController.findAccountDetails);

/**
 * @api {get} /accounts/:accountId/getBalance Find Account Balance
 * @apiHeader {String} Authorization User unique access-key.
 * @apiName findAccountBalance
 * @apiGroup Account
 *
 * @apiParam {Number} accountId Account unique Id.
 *
 * @apiSuccess {String} _id Id of the Account.
 * @apiSuccess {Number} balance Account balance.
 *
 * @apiSuccessExample Success-Response:
 *   HTTP/1.1 200 OK
 *   {
 *     "status": "success",
 *     "message": "Accounts balance returned successfully",
 *     "payload": [
 *       {
 *         "_id": "62bbc77e1b13a0f77d1b3e77",
 *         "balance": 100,
 *       },
 *     ]
 *   }
 *
 * @apiError Error while get account balance.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "status": "error",
 *       "message": "Error while get account balance",
 *       "payload": [errors]
 *     }
 */
accountRouter
    .route('/:accountId/getBalance')
    .get(accountController.findAccountBalance);

/**
 * @api {put} /accounts/:accountId/transfer P2P Transfer
 * @apiName P2PTransfer
 * @apiGroup Account
 *
 * @apiParam {Number} accountId Account unique Id.
 *
 * @apiBody {Number} [ammount] Mandatory Tranfer ammount
 * @apiBody {String} [recieverAccountId] Mandatory Reciever Account Id
 *
 * @apiSuccess {String} _id Id of the Account.
 * @apiSuccess {String} userId Id of the owner account User.
 * @apiSuccess {String} number Account number.
 * @apiSuccess {String} password Encrypted passowrd of the Account.
 * @apiSuccess {String} balance Account balance.
 * @apiSuccess {Date} CreatedAt Timestamp when user was created.
 * @apiSuccess {Date} UpdatedAt Timestamp of last update user.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *       "status": "success",
 *       "message": "Transfer performed successfully",
 *       "payload": {
 *         "_id": "62bbc77e1b13a0f77d1b3e77",
 *         "userId": "62bbab7100d0e14f8024f567",
 *         "number": "123456789",
 *         "password": "$2b$10$oWZNGgcab2j7x.AEj8E6ZuI7sdlceKB5Bvqp7HrR8W80EaEsQYFLu",
 *         "balance": 100,
 *         "createdAt": "2022-06-29T03:31:10.114Z",
 * 	       "updatedAt": "2022-06-29T16:52:52.597Z",
 *         "__v": 0
 *     }
 *
 * @apiError Error while performing transfer.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "status": "error",
 *       "message": "Error while performing transfer",
 *       "payload": [errors]
 *     }
 */
accountRouter.route('/:accountId/transfer').put(accountController.P2PTransfer);

export default accountRouter;
