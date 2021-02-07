const express = require("express");
const path = require("path");
const PORT = process.env.PORTL || 3001;

const app = express();
app.use(express.json());

app.use(express.static(path.resolve(__dirname, "../client/build")));

// app.use("/api")

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})