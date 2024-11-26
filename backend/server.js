import "dotenv/config";
import express from "express";
import authRouter from "./routes/auth.route.js";
import connectDB from "./DB/connectDB.js";
import movieRouter from "./routes/movie.route.js";
import tvRouter from "./routes/Tv.route.js";
import cookieParser from "cookie-parser";
import protectRoute from "./middleWare/protectRoutes.js";
import searchRouter from "./routes/search.route.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());


app.use("/api/v1/auth", authRouter);
app.use("/api/v1/movies", protectRoute, movieRouter);
app.use("/api/v1/tv", protectRoute, tvRouter);
app.use("/api/v1/search",protectRoute, searchRouter)

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(`failed to connect DB`, err);
    process.exit(1);
  });
