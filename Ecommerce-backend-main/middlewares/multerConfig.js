const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const mongoose = require('mongoose');

const storage = new GridFsStorage({
  url: process.env.DATABASE,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const filename = `${file.originalname}`;
      const fileInfo = {
        filename: filename,
        bucketName: 'uploads',
      };
      resolve(fileInfo);
    });
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 },
});

module.exports = upload;
