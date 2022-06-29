import IUserRepository from '@domain/user/IUserRepository';

export default (
    userRepository: IUserRepository,
    name: string,
    email: string,
    password: string
) => {
    return userRepository.createUser({ name, email, password });
};
