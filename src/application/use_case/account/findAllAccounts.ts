import IAccountRepository from '@domain/account/IAccountRepository';

export default (accountRepository: IAccountRepository) => {
    return accountRepository.findAllAccounts();
};
