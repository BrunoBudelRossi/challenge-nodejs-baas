import IUser from '@domain/user/IUser';

export default interface UserRepositoryInterface {
    findAllUsers(): Promise<any>;
    createUser(user: IUser): Promise<any>;
}
