const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const app = express();
const APIv1 = `/api/v1`;

const mahasiswaRouter = require("./app/api/v1/mahasiswa/router");
const matkulRouter = require("./app/api/v1/matakuliah/router");
const nilaiRouter = require("./app/api/v1/nilai/router");

// middlewares
const notFoundMiddleware = require("./app/middlewares/not-found");
const handleErrorMiddleware = require("./app/middlewares/handler-error");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(`${APIv1}`, mahasiswaRouter);
app.use(`${APIv1}`, matkulRouter);
app.use(`${APIv1}`, nilaiRouter);

// middlewares
app.use(notFoundMiddleware);
app.use(handleErrorMiddleware);

module.exports = app;
