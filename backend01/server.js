const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

const cors = require("cors");

const userRoutes = require("./routes/users");


dotenv.config({ path: "./config/config.env" });

const app = express();

connectDB();

var whitelist = ["http://localhost:3000"];

var corsOptions = {
  origin: function (origin, callback) {
    if (origin === undefined || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Horigloj baina.."));
    }
  },
  allowedHeaders: "Authorization, Set-Cookie, Content-Type",
  methods: "GET, POST, PUT, DELETE",
  credentials: true,
};




app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/users", userRoutes);
app.use(errorHandler);

const server = app.listen(
  process.env.PORT,
  console.log(`Express сэрвэр ${process.env.PORT} порт дээр аслаа... `)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Алдаа гарлаа : ${err.message}`.underline.red.bold);
  server.close(() => {
    process.exit(1);
  });
});