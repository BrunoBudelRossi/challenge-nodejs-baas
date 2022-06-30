import mongoose, { Schema } from 'mongoose';

import IDocument from '@domain/document/IDocument';

const DocumentSchema: Schema = new Schema(
    {
        userId: { type: String, required: true },
        filename: { type: String, required: true },
        path: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model<IDocument>('Document', DocumentSchema);
