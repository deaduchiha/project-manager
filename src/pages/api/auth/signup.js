import connectDB from "@/utils/connectDB";
import User from "@/models/User";
import { hashPassword } from "@/utils/auth";

const handler = async (req, res) => {
  if (req.method !== "POST") return;

  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: "failed", message: "error in connect to DB" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({
      status: "failed",
      message: "Invalid Data",
    });
  }

  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    return res.status(422).json({
      status: "failed",
      message: "User already exist",
    });
  }

  const hashedPassword = await hashPassword(password);

  const newUser = await User.create({ email: email, password: hashedPassword });
  console.log(newUser);

  res.status(201).json({
    status: "success",
    message: "user created",
  });
};

export default handler;
