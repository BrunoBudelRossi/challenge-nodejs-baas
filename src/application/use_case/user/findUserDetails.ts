import IUserRepository from '@domain/user/IUserRepository';

export default (userRepository: IUserRepository, userId: string) => {
    return userRepository.findUserDetails(userId);
};
