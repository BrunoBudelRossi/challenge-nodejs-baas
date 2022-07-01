import { Router } from 'express';
import documentController from '@controllers/documentController';
import multer from 'multer';
import { storage } from '@infrastructure/utils/multer/multer';

const upload = multer({ storage });

const documentRouter = Router({ mergeParams: true });

documentRouter
    .route('/')
    /**
     * @api {get} /documents/ Find All Documents
     * @apiHeader {String} Authorization User unique access-key.
     * @apiName findAllDocuments
     * @apiGroup Document
     *
     * @apiSuccess {String} _id Id of the Document.
     * @apiSuccess {String} userId Id of the owner document User.
     * @apiSuccess {String} filename Name of file.
     * @apiSuccess {String} path Path where file is storage.
     * @apiSuccess {Date} CreatedAt Timestamp when user was created.
     * @apiSuccess {Date} UpdatedAt Timestamp of last update user.
     *
     * @apiSuccessExample Success-Response:
     *   HTTP/1.1 200 OK
     *   {
     *     "status": "success",
     *     "message": "All documents returned successfully",
     *     "payload": [
     *       {
     *         "_id": "62be12450ae882ea17552f86",
     *         "userId": "62bc786517aafc85d1b56255",
     *         "filename": "2022-06-30T21-14-45.230Z - 813690963 - test.txt",
     *         "path": "C:\\ModalAsAService\\challenge-nodejs-baas\\uploads\\2022-06-30T21-14-45.230Z - 813690963 - test.txt",
     *         "createdAt": "2022-06-30T21:14:45.245Z",
     *         "updatedAt": "2022-06-30T21:14:45.245Z",
     *         "__v": 0
     *       }
     *     ]
     *   }
     *
     * @apiError Error while find all documents.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 500 Internal Server Error
     *     {
     *       "status": "error",
     *       "message": "Error while find all documents",
     *       "payload": [errors]
     *     }
     */
    .get(documentController.findAllDocuments)

    /**
     * @api {post} /users/:userId/documents Upload DOcument
     * @apiHeader {String} Authorization User unique access-key.
     * @apiName uploadDocument
     * @apiGroup Document
     *
     * @apiParam {Number} userId User unique Id.
     *
     * @apiBody {File} [file] Mandatory Multipart form body - File selected for upload
     *
     * @apiSuccess {String} _id Id of the Document.
     * @apiSuccess {String} userId Id of the owner document User.
     * @apiSuccess {String} filename Name of file.
     * @apiSuccess {String} path Path where file is storage.
     * @apiSuccess {Date} CreatedAt Timestamp when user was created.
     * @apiSuccess {Date} UpdatedAt Timestamp of last update user.
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 201 Created
     *   {
     *     "status": "success",
     *     "message": "New file uploaded",
     *     "payload": [
     *       {
     *         "_id": "62be12450ae882ea17552f86",
     *         "userId": "62bc786517aafc85d1b56255",
     *         "filename": "2022-06-30T21-14-45.230Z - 813690963 - test.txt",
     *         "path": "C:\\ModalAsAService\\challenge-nodejs-baas\\uploads\\2022-06-30T21-14-45.230Z - 813690963 - test.txt",
     *         "createdAt": "2022-06-30T21:14:45.245Z",
     *         "updatedAt": "2022-06-30T21:14:45.245Z",
     *         "__v": 0
     *       }
     *     ]
     *   }
     *
     * @apiError Error while upload file.
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 500 Internal Server Error
     *     {
     *       "status": "error",
     *       "message": "Error while upload file",
     *       "payload": [errors]
     *     }
     */
    .post(upload.any(), documentController.uploadDocument);

export default documentRouter;
