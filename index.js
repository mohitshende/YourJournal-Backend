const connectToMongo = require("./db");

connectToMongo();

const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`YourJournal Backend listening at http://localhost:${port}`);
});
