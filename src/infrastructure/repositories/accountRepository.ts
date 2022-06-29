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

    async P2PTransfer(
        accountId: string,
        recieverAccountId: string,
        ammount: number
    ): Promise<any> {
        const accountData = await AccountModel.findOne({ _id: accountId });
        const recieverAccountData = await AccountModel.findOne({
            _id: recieverAccountId,
        });

        if (!accountData) {
            throw new Error('This shipping account is invalid');
        } else if (!recieverAccountData) {
            throw new Error('This reciever account is invalid');
        } else if (accountData.balance - ammount < 0) {
            throw new Error('Account has no balance for this transfer');
        } else {
            await AccountModel.updateOne(
                {
                    _id: recieverAccountId,
                },
                { balance: recieverAccountData.balance + ammount }
            );

            accountData.balance -= ammount;
            await AccountModel.updateOne(
                { _id: accountId },
                { balance: accountData.balance }
            );
            return accountData;
        }
    }
}

export default new AccountRepository();
