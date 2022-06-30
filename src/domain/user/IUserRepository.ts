import IUser from '@domain/user/IUser';

export default interface UserRepositoryInterface {
    findAllUsers(): Promise<any>;
    createUser(user: IUser): Promise<any>;
    checkLogin({ email, password }): Promise<any>;
    findUserDetails(userId: string): Promise<any>;
}
