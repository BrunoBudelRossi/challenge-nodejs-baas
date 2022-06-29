import IUser from '@domain/user/IUser';
import IUserRepository from '@domain/user/IUserRepository';
import userModel from '@infrastructure/db/mongo/models/userModel';
import { compare, encrypt } from '@infrastructure/utils/bcrypt/crypt';

class UserRepository implements IUserRepository {
    async findAllUsers(): Promise<any> {
        const userData = await userModel.find({
            deleted: false,
        });

        if (userData) {
            return userData;
        } else {
            throw Error;
        }
    }

    async createUser(user: IUser): Promise<any> {
        user.password = encrypt(user.password);
        const userData = await userModel.create(user);
        if (userData) {
            return userData;
        } else {
            throw Error;
        }
    }

    async checkLogin({ email, password }): Promise<any> {
        const userData = await userModel.findOne({ email });

        if (compare(password, userData.password)) {
            return userData._id;
        } else {
            return null;
        }
    }
}

export default new UserRepository();
