const express = require("express");
const path = require("path");
beastRouter = require("./routes");
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());

// for serving built React app
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use("/api", beastRouter());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})