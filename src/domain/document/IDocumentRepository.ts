import IDocument from '@domain/document/IDocument';

export default interface AccountRepositoryInterface {
    uploadDocument(document: IDocument): Promise<any>;
    findAllDocuments(): Promise<any>;
}
