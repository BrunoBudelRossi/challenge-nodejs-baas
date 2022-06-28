import IUserRepository from '@domain/user/IUserRepository';

export default (userRepository: IUserRepository) => {
    return userRepository.findAllUsers();
};
