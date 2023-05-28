import { Box, Button, Container, Typography } from "@mui/material";
import { HandleSidebar } from "./layout";
import { useContext } from "react";

const Navbar = () => {
  const { setIsOpen, isOpen } = useContext(HandleSidebar);

  const handleSidebar = () => setIsOpen(!isOpen);

  return (
    <Box bgcolor="#f5ebe0" py={2}>
      <Container maxWidth="lg">
        <Box display="flex" alignItems="center">
          <Box flex={1}>
            <Button onClick={handleSidebar} variant="contained" color="wafer">
              new todo
            </Button>
          </Box>
          <Typography>Project manager</Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
