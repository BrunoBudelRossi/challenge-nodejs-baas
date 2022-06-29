import { Request, Response } from 'express';
import accountRepository from '@infrastructure/repositories/accountRepository';
import findAllAccounts from '@application/use_case/account/findAllAccounts';
import createAccount from '@application/use_case/account/createAccount';
import findAccountBalance from '@application/use_case/account/findAccountBalance';
import findAccountDetails from '@application/use_case/account/findAccountDetails';
import P2PTransfer from '@application/use_case/account/P2PTransfer';

export default {
    findAllAccounts: async (req: Request, res: Response): Promise<Response> => {
        try {
            const resultAccounts = await findAllAccounts(accountRepository);
            return res.status(200).json({
                status: 'success',
                message: 'All accounts returned successfully',
                payload: resultAccounts,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: err.message || 'Error while find all accounts',
                payload: [err],
            });
        }
    },

    createAccount: async (req: Request, res: Response): Promise<Response> => {
        try {
            const { number, password, balance } = req.body;
            const { userId } = req.params;

            const resultAccount = await createAccount(
                accountRepository,
                userId,
                number,
                password,
                balance
            );

            return res.status(201).json({
                status: 'success',
                message: 'New account created',
                payload: resultAccount,
            });
        } catch (err) {
            if (err.message) {
                return res.status(409).json({
                    status: 'error',
                    message: err.message,
                });
            }
            return res.status(500).json({
                status: 'error',
                message: err.message || 'Error while find all accounts',
                payload: [err],
            });
        }
    },

    findAccountDetails: async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        try {
            const { accountId } = req.params;

            const resultAccount = await findAccountDetails(
                accountRepository,
                accountId
            );

            return res.status(200).json({
                status: 'success',
                message: 'Account details returned successfully',
                payload: resultAccount,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: err.message || 'Error while get account details',
                payload: [err],
            });
        }
    },

    findAccountBalance: async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        try {
            const { accountId } = req.params;

            const resultAccount = await findAccountBalance(
                accountRepository,
                accountId
            );

            return res.status(200).json({
                status: 'success',
                message: 'Accounts balance returned successfully',
                payload: resultAccount,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: err.message || 'Error while get account balance',
                payload: [err],
            });
        }
    },

    P2PTransfer: async (req: Request, res: Response): Promise<Response> => {
        try {
            const { accountId } = req.params;
            const { ammount, recieverAccountId } = req.body;

            const resultTransfer = await P2PTransfer(
                accountRepository,
                accountId,
                recieverAccountId,
                ammount
            );

            return res.status(200).json({
                status: 'success',
                message: 'Transfer performed successfully',
                payload: resultTransfer,
            });
        } catch (err) {
            if (err.message) {
                return res.status(409).json({
                    status: 'error',
                    message: err.message,
                });
            }
            return res.status(500).json({
                status: 'error',
                message: err.message || 'Error while performing transfer',
                payload: [err],
            });
        }
    },
};
