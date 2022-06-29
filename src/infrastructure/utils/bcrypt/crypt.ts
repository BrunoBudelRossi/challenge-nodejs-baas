import bcrypt from 'bcrypt';

const SALTROUNDS = 10;

export const encrypt = (password: string) => {
    if (!password) {
        return null;
    }

    return bcrypt.hashSync(password, SALTROUNDS);
};

export const compare = (password: string, encryptedPassword: string) => {
    if (!password || !encryptedPassword) {
        return false;
    }

    return bcrypt.compareSync(password, encryptedPassword);
};
