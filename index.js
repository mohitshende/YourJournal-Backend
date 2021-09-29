const connectToMongo = require("./db");

connectToMongo();

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

const frontend_url = process.env.FRONTEND;

const whitelist = [
  "http://localhost:3000",
  "http://localhost:8080",
  frontend_url,
];
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin);
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable");
      callback(null, true);
    } else {
      console.log("Origin rejected");
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// Add react app frontend url later on

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`YourJournal Backend listening at http://localhost:${port}`);
});
