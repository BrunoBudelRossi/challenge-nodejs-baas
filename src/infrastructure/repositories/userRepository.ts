import IUser from '@domain/user/IUser';
import IUserRepository from '@domain/user/IUserRepository';
import accountModel from '@infrastructure/db/mongo/models/accountModel';
import DocumentModel from '@infrastructure/db/mongo/models/documentModel';
import UserModel from '@infrastructure/db/mongo/models/userModel';
import { compare, encrypt } from '@infrastructure/utils/bcrypt/crypt';

class UserRepository implements IUserRepository {
    async findAllUsers(): Promise<any> {
        const userData = await UserModel.find();

        if (userData) {
            return userData;
        } else {
            throw Error;
        }
    }

    async createUser(user: IUser): Promise<any> {
        user.password = encrypt(user.password);
        const userData = await UserModel.create(user);
        if (userData) {
            return userData;
        } else {
            throw Error;
        }
    }

    async checkLogin({ email, password }): Promise<any> {
        const userData = await UserModel.findOne({ email });

        if (compare(password, userData.password)) {
            return userData._id;
        } else {
            return null;
        }
    }

    async findUserDetails(userId: string): Promise<any> {
        const user = await UserModel.findOne({ userId });

        if (user) {
            return {
                user,
                account: await accountModel.findOne({ userId }),
                documents: await DocumentModel.find({ userId }),
            };
        } else {
            throw Error;
        }
    }
}

export default new UserRepository();
