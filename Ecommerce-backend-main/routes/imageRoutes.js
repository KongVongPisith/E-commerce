// backend/routes/imageRoutes.js

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { GridFsStorage } = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');

const conn = mongoose.connection;
let gfs;
conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

router.get('/uploads/:filename', (req, res) => {
  const filename = req.params.filename;

  gfs.files.findOne({ filename: filename }, (err, file) => {
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: 'File not found',
      });
    }
    res.set('Content-Type', file.contentType);
    const readstream = gfs.createReadStream({ filename: filename });
    readstream.pipe(res);
  });
});

module.exports = router;
