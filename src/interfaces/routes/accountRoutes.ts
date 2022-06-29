import { Router } from 'express';
import accountController from '@controllers/accountController';

const accountRouter = Router({ mergeParams: true });

accountRouter
    .route('/')
    .get(accountController.findAllAccounts)
    .post(accountController.createAccount);

accountRouter
    .route('/:accountId/getDetails')
    .get(accountController.findAccountDetails);
accountRouter
    .route('/:accountId/getBalance')
    .get(accountController.findAccountBalance);

export default accountRouter;