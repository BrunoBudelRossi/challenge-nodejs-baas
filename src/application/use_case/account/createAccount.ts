import IAccountRepository from '@domain/account/IAccountRepository';

export default (
    accountRepository: IAccountRepository,
    userId: string,
    number: string,
    password: string,
    balance: number
) => {
    return accountRepository.createAccount({
        userId,
        number,
        password,
        balance,
    });
};
