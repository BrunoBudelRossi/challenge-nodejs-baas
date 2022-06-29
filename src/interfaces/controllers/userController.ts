import { Request, Response } from 'express';
import findAllUsers from '@application/use_case/user/findAllUsers';
import userRepository from '@infrastructure/repositories/userRepository';
import createUser from '@application/use_case/user/createUser';

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

    createUser: async (req: Request, res: Response): Promise<Response> => {
        try {
            const { name, email, password } = req.body;

            const resultUser = await createUser(
                userRepository,
                name,
                email,
                password
            );

            return res.status(201).json({
                status: 'success',
                message: 'New user created',
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
