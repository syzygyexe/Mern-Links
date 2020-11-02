const express = require("express");
const config = require("config");
const mongoose = require("mongoose");

const app = express();

// middleware to convert req.body onto JSON format
app.use(express.json({ extended: true }));

// registring APIs for our front-end
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/link", require("./routes/link.routes"));

// If port is not defined inside of our ./config/default.json file, we set it to 5000.
const PORT = config.get("port") || 5000;

async function start() {
  try {
    //   Connect to DB, "mongoUri" is taken from the ./config/default.json
    await mongoose.connect(config.get("mongoUri"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    // Start server after DB is connected
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}`));
  } catch (e) {
    console.log("Server Error", e.message);
    // Terminate process if any malfunction occurs.
    process.exit(1);
  }
}

start();
