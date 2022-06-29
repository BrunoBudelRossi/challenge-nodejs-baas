import IAccountRepository from '@domain/account/IAccountRepository';

export default (
    accountRepository: IAccountRepository,
    accountId: string,
    recieverAccountId: string,
    ammount: number
) => {
    return accountRepository.P2PTransfer(accountId, recieverAccountId, ammount);
};
