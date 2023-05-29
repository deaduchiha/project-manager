import { Box, Button, Container, Typography } from "@mui/material";
import { HandleSidebar } from "./layout";
import { useContext } from "react";

const Navbar = () => {
  const { setIsOpen, isOpen } = useContext(HandleSidebar);

  const handleSidebar = () => setIsOpen(!isOpen);

  return (
    <Box bgcolor="#118ab2" py={3} height="11vh">
      <Container maxWidth="lg">
        <Box display="flex" alignItems="center">
          <Box flex={1}>
            {!isOpen && (
              <Button onClick={handleSidebar} variant="contained" color="wafer">
                new todo
              </Button>
            )}
          </Box>
          <Button variant="text" sx={{ color: "#fff" }} color="inherit">
            Project manager
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
