import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") router.replace("/");
  }, [status]);

  const handleSignup = async () => {
    try {
      const url = "/api/auth/signup";
      const res = await axios.post(url, { email, password });
      const data = res.data;
      console.log(data);

      if (res.data.status === "success") router.push("/signin");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="89vh"
        gap={1}
      >
        <Typography variant="h6" sx={{ userSelect: "none" }}>
          Registration Form
        </Typography>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="wafer"
          sx={{ textTransform: "inherit" }}
          onClick={handleSignup}
        >
          Register
        </Button>
        <Box display="flex" gap={2}>
          <Typography>Have an account ?</Typography>
          <Link href="/signin">signin</Link>
        </Box>
      </Box>
    </>
  );
};
export default SignupPage;
