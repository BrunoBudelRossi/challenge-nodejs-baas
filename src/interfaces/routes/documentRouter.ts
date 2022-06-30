import { Router } from 'express';
import documentController from '@controllers/documentController';
import multer from 'multer';
import { storage } from '@infrastructure/utils/multer/multer';

const upload = multer({ storage });

const documentRouter = Router({ mergeParams: true });

documentRouter
    .route('/')
    .get(documentController.findAllDocuments)
    .post(upload.any(), documentController.uploadDocument);

export default documentRouter;
