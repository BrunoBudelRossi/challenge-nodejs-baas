import IDocumentRepository from '@domain/document/IDocumentRepository';

export default (documentRepository: IDocumentRepository) => {
    return documentRepository.findAllDocuments();
};
