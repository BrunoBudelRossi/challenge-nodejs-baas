import { Request, Response } from 'express';
import findAllUsers from '@application/use_case/user/findAllUsers';
import userRepository from '@infrastructure/repositories/userRepository';

export default {
    findAllUsers: async (req: Request, res: Response): Promise<Response> => {
        try {
            const resultUser = await findAllUsers(userRepository);

            return res.status(200).json({
                status: 'success',
                message: 'All users returned successfully',
                payload: resultUser,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: err.message || 'Error while find all users',
                payload: [err],
            });
        }
    },
};
