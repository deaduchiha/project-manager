import { Box, Button, TextField, Typography } from "@mui/material";
import Link from "next/link";

const SignupPage = () => {
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
        <TextField label="Email" type="email" variant="outlined" />
        <TextField label="Password" type="password" variant="outlined" />
        <Button
          variant="contained"
          color="wafer"
          sx={{ textTransform: "inherit" }}
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
