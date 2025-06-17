import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";


const app = express();
const router = express.Router();

<<<<<<< HEAD
config({ path: "./config.env" });

=======
config({path: "./config.env"});
>>>>>>> 1b193f9 (Add BACKEND folder contents)
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

<<<<<<< HEAD

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
=======
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
router.get("/", (req, res) => {
  res.json({ success: true, message: "come to india" });
});




>>>>>>> 1b193f9 (Add BACKEND folder contents)

router.post("/send/mail", async (req, res, next) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return next(
      res.status(400).json({
        success: false,
        message: "Please provide all details",
      })
    );
  }
<<<<<<< HEAD
   try {
    await sendEmail({
      email: "vermashalini7976@gmail.com",
=======
  try {
    await sendEmail({
      email: "merndeveloper4@gmail.com",
>>>>>>> 1b193f9 (Add BACKEND folder contents)
      subject: "GYM WEBSITE CONTACT",
      message,
      userEmail: email,
    });
    res.status(200).json({
      success: true,
      message: "Message Sent Successfully.",
    });
  } catch (error) {
<<<<<<< HEAD
=======
    console.error("Email sending failed:", error);
>>>>>>> 1b193f9 (Add BACKEND folder contents)
    res.status(500).json({
      success: false,
      message: " Internal Server Error",
    });
  }
<<<<<<< HEAD





  

});



app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
=======
});

app.use(router);

console.log(process.env.PORT)



const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
>>>>>>> 1b193f9 (Add BACKEND folder contents)
});