import connectDB from "@/utils/connectDB";
import { getSession } from "next-auth/react";
import User from "@/models/User";

const handler = async (req, res) => {
  try {
    await connectDB();
  } catch (error) {
    throw new Error("error in connection to DB");
  }

  const session = await getSession({ req });

  if (!session) {
    return res
      .status(401)
      .json({ status: "failed", message: "you are not logged in" });
  }

  const user = await User.findOne({ email: session.user.email });
  if (!user) {
    return res
      .status(404)
      .json({ status: "failed", message: "user doesn't exist" });
  }

  if (req.method === "POST") {
    const { title, status } = req.body;

    if (!title || !status) {
      return res
        .status(422)
        .json({ status: "failed", message: "invalid data " });
    }

    user.todos.push({ title, status });
    user.save();

    res.status(201).json({ status: "success", message: "Todo created" });
  }
};

export default handler;
