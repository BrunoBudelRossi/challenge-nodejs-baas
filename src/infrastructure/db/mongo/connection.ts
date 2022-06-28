import mongoose from 'mongoose';

export const connect = async (): Promise<void> => {
    mongoose
        .connect(process.env.DATABASE_URL)
        .then(() => console.log(`Connected to mongo database`));
};

export const close = (): Promise<void> =>
    mongoose.connection
        .close()
        .then(() => console.log("Can't connect to mongo database"));
