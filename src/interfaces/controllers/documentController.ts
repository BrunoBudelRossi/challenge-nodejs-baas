import { Request, Response } from 'express';
import documentRepository from '@infrastructure/repositories/documentRepository';
import findAllDocuments from '@application/use_case/document/findAllDocuments';
import uploadDocument from '@application/use_case/document/uploadDocument';

interface MulterRequest extends Request {
    files: any;
}

export default {
    findAllDocuments: async (
        req: Request,
        res: Response
    ): Promise<Response> => {
        try {
            const resultDocuments = await findAllDocuments(documentRepository);

            return res.status(200).json({
                status: 'success',
                message: 'All documents returned successfully',
                payload: resultDocuments,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: err.message || 'Error while find all documents',
                payload: [err],
            });
        }
    },

    uploadDocument: async (
        req: MulterRequest,
        res: Response
    ): Promise<Response> => {
        try {
            const { filename, path } = req.files[0];
            const { userId } = req.params;

            const resultDocument = await uploadDocument(
                documentRepository,
                userId,
                filename,
                path
            );

            return res.status(201).json({
                status: 'success',
                message: 'New file uploaded',
                payload: resultDocument,
            });
        } catch (err) {
            return res.status(500).json({
                status: 'error',
                message: err.message || 'Error while upload file',
                payload: [err],
            });
        }
    },
};
