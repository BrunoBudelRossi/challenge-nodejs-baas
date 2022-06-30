import { Request, Response } from 'express';
import userRepository from '@infrastructure/repositories/userRepository';
import findAllUsers from '@application/use_case/user/findAllUsers';
import createUser from '@application/use_case/user/createUser';
import findUserDetails from '@application/use_case/user/findUserDetails';

export default {
    findAllUsers: async (req: Request, res: Response): Promise<Response> => {
        try {
            const resultUsers = await findAllUsers(userRepository);

            return res.status(200).json({
                status: 'success',
                message: 'All users returned successfully',
                payload: resultUsers,
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

    findUserDetails: async (req: Request, res: Response): Promise<Response> => {
        try {
            const { userId } = req.params;
            const resultUsers = await findUserDetails(userRepository, userId);

            return res.status(200).json({
                status: 'success',
                message: 'All user details returned successfully',
                payload: [resultUsers],
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: err.message || 'Error while find user details',
                payload: [err],
            });
        }
    },
};
