import { Button, Drawer } from "@mui/material";
import { HandleSidebar } from "./layout";
import { useContext } from "react";
import Link from "next/link";

const Sidebar = () => {
  const { setIsOpen, isOpen } = useContext(HandleSidebar);

  const todos = [
    { label: "Todos", href: "todos" },
    { label: "Add Todo", href: "add-todo" },
    { label: "Profile", href: "profile" },
  ];

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

      {todos.map((title) => (
        <Link key={title.label} href={title.href}>
          <Button variant="text" sx={{ color: "#fff" }}>
            {title.label}
          </Button>
        </Link>
      ))}
    </Drawer>
  );
};

export default Sidebar;
