import { Button, Drawer } from "@mui/material";
import { HandleSidebar } from "./layout";
import { useContext } from "react";

const Sidebar = () => {
  const { setIsOpen, isOpen } = useContext(HandleSidebar);

  const handleSidebar = () => setIsOpen(!isOpen);

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      sx={{
        position: "relative",
        "& .MuiDrawer-paper": {
          width: 150,
          bgcolor: "#edede9",
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
        sx={{ position: "absolute", top: 10 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        x
      </Button>
      <h1>salam</h1>
      <h1>salam</h1>
      <h1>salam</h1>
    </Drawer>
  );
};

export default Sidebar;
