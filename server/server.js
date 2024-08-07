import express, { Router } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js";
import conversationRoute from "./routes/conversation.route.js";
import reviewRoute from "./routes/review.route.js";
import messageRoute from "./routes/message.route.js";
import authRoute from "./routes/auth.route.js";
import gigRoute from "./routes/gig.route.js";
import orderRoute from "./routes/order.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";

const app = express();
const router = Router();

dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://fiver-clone-six.vercel.app",
      "https://vs-fiver-clone.onrender.com",
    ],
    credentials: true,
  })
);

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrcElem: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      connectSrc: ["www.checkout.stripe.com"],
      imgSrc: ["'self'", "*.stripe.com"],
      frameSrc: [
        "'self'",
        "http://localhost:5173",
        "checkout.stripe.com",
        "connect-js.stripe.com",
        "https://js.stripe.com",
        "https://hooks.stripe.com",
      ],
    },
  })
);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
  }
};

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/messages", messageRoute);
app.use("/api/orders", orderRoute);
app.use("/api/reviews", reviewRoute);

app.options("*", (req, res) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://fiver-clone-six.vercel.app"
  );
  res.header(
    "Access-Control-Allow-Origin",
    "https://vs-fiver-clone.onrender.com"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", true);
  res.send("OK");
});

app.listen(8800, () => {
  connect();
  console.log("server started");
});
