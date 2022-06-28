import IUserRepository from '@domain/user/IUserRepository';
import userModel from '@infrastructure/db/mongo/models/userModel';

class UserRepository implements IUserRepository {
    async findAllUsers(): Promise<any> {
        const userData: any = await userModel.find({
            deleted: false,
        });

        if (userData) {
            return userData;
        } else {
            throw Error;
        }
    }
}

export default new UserRepository();
