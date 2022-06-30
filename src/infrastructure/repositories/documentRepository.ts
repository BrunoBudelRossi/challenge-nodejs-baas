import IDocument from '@domain/document/IDocument';
import IDocumentRepository from '@domain/document/IDocumentRepository';
import DocumentModel from '@infrastructure/db/mongo/models/documentModel';

class DocumentRepository implements IDocumentRepository {
    async uploadDocument(document: IDocument): Promise<any> {
        const documentData = await DocumentModel.create(document);
        if (documentData) {
            return documentData;
        } else {
            throw Error;
        }
    }

    async findAllDocuments(): Promise<any> {
        const documentData = await DocumentModel.find();

        if (documentData) {
            return documentData;
        } else {
            throw Error;
        }
    }
}

export default new DocumentRepository();
