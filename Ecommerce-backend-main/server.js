require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { GridFsStorage } = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const multer = require("multer");
const methodOverride = require('method-override');

// imports

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

app.use(express.static('public'));

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
// Cors Error
app.use(cors());

// app.use(cors({ origin: '*' }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Database Connection
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database Connected!");
        startServer();
}).catch(err => console.log(err)); 

const startServer = () => {
    let gfs;
        const conn = mongoose.connection;
        conn.once("open", () => {
            gfs = Grid(conn.db, mongoose.mongo);
            gfs.collection("uploads");
        });

    const router = require("./routes/UserRoutes")
    app.use("/", router);

    const imageRoutes = require('./routes/imageRoutes');
    app.use(imageRoutes);
    
    const admin = require("./routes/AdminRoutes");
    app.use("/admin", admin);

    const product = require("./routes/ProductRoutes");
    app.use(product);

    const PORT = process.env.PORT;
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    })
};