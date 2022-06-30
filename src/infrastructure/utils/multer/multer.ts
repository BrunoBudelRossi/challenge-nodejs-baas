import multer from 'multer';

export const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, __dirname + '../../../../../uploads');
    },
    filename: function (req, file, callback) {
        callback(
            null,
            `${new Date().toISOString().replace(/:/g, '-')} - ${Math.round(
                Math.random() * 1e9
            )} - ${file.originalname}`
        );
    },
});
