import mongoose, { Schema } from 'mongoose';

import IAccount from '@domain/account/IAccount';

const AccountSchema: Schema = new Schema(
    {
        userId: { type: String, required: true },
        number: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        balance: { type: Number, required: true },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model<IAccount>('Account', AccountSchema);
