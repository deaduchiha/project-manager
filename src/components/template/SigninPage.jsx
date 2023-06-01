import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = () => {};

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
          Login Form
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
          onClick={handleSignin}
        >
          Login
        </Button>
        <Box display="flex" gap={2}>
          <Typography>Create an account</Typography>
          <Link href="/signup">Sign Up</Link>
        </Box>
      </Box>
    </>
  );
};

export default SigninPage;
