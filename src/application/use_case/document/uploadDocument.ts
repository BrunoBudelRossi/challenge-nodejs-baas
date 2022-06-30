import IDocumentRepository from '@domain/document/IDocumentRepository';

export default (
    documentRepository: IDocumentRepository,
    userId: string,
    filename: string,
    path: string
) => {
    return documentRepository.uploadDocument({
        userId,
        filename,
        path,
    });
};
