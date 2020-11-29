const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const PORT = process.env.PORT || 3000;


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("combined"));


app.get("/", (request, response) => {
    return response.status(200).send("Welcome to the League Spx API");
});


app.listen(PORT, () => console.log(`Server listening on Port:${PORT}`))