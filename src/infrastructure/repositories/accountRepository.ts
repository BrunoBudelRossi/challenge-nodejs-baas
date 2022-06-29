import IAccount from '@domain/account/IAccount';
import IAccountRepository from '@domain/account/IAccountRepository';
import AccountModel from '@infrastructure/db/mongo/models/accountModel';
import { encrypt } from '@infrastructure/utils/bcrypt/crypt';

class AccountRepository implements IAccountRepository {
    async findAllAccounts(): Promise<any> {
        const accountData = await AccountModel.find();

        if (accountData) {
            return accountData;
        } else {
            throw Error;
        }
    }

    async createAccount(account: IAccount): Promise<any> {
        const alreadyHasAccount = await AccountModel.findOne({
            userId: account.userId,
        });

        if (alreadyHasAccount) {
            throw new Error('User already has an account');
        }

        account.password = encrypt(account.password);
        const accountData = await AccountModel.create(account);
        if (accountData) {
            return accountData;
        } else {
            throw Error;
        }
    }

    async findAccountDetails(accountId: string): Promise<any> {
        const accountData = await AccountModel.find({ _id: accountId });

        if (accountData) {
            return accountData;
        } else {
            throw Error;
        }
    }

    async findAccountBalance(accountId: string): Promise<any> {
        const accountData = await AccountModel.find({ _id: accountId }).select(
            'balance'
        );

        if (accountData) {
            return accountData;
        } else {
            throw Error;
        }
    }
}

export default new AccountRepository();
