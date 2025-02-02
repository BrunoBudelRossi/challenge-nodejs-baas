import IAccount from '@domain/account/IAccount';

export default interface AccountRepositoryInterface {
    findAllAccounts(): Promise<any>;
    createAccount(account: IAccount): Promise<any>;
    findAccountDetails(accountId: string): Promise<any>;
    findAccountBalance(accountId: string): Promise<any>;
    P2PTransfer(
        accountId: string,
        recieverAccountId: string,
        ammount: number
    ): Promise<any>;
}
