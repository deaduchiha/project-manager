import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import User from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";

export const authOptions = {
  session: { jwt: true },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;

        try {
          await connectDB();
        } catch (error) {
          throw new Error("Error connecting to the database");
        }

        if (!email || !password) {
          throw new Error("Invalid credentials");
        }

        const user = await User.findOne({ email: email });

        if (!user) throw new Error("User doesn't exist");

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) throw new Error("Incorrect email or password");

        return { email };
      },
    }),
  ],
};

export default NextAuth(authOptions);
