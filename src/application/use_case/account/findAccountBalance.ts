import IAccountRepository from '@domain/account/IAccountRepository';

export default (accountRepository: IAccountRepository, accountId: string) => {
    return accountRepository.findAccountBalance(accountId);
};
