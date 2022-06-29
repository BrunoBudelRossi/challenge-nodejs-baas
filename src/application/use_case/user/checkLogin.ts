import IUserRepository from '@domain/user/IUserRepository';

export default (userRepository: IUserRepository, { email, password }) => {
    return userRepository.checkLogin({ email, password });
};
