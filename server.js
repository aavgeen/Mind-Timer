const express = require('express');
const mongoose = require('mongoose');
const body_parser = require('body-parser');

const app = express();

app.use(body_parser.json());

//dbCOnfig
var db = require("./config/keys").mongoDBURI;

mongoose
        .connect(db)
        .then(() => console.log("Connected to Mongo DB."))
        .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
