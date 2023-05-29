import { Button, Drawer, Typography } from "@mui/material";
import { HandleSidebar } from "./layout";
import { useContext } from "react";

const Sidebar = () => {
  const { setIsOpen, isOpen } = useContext(HandleSidebar);

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      sx={{
        position: "relative",
        "& .MuiDrawer-paper": {
          width: 150,
          bgcolor: "#073b4c",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 4,
        },
      }}
      open={isOpen}
    >
      <Button
        sx={{ position: "absolute", top: 40 }}
        onClick={() => setIsOpen(!isOpen)}
        variant="contained"
        color="error"
      >
        close
      </Button>

      <Typography color="#fff">items</Typography>
    </Drawer>
  );
};

export default Sidebar;
