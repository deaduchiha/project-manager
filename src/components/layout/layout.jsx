import { createContext, useState } from "react";
import { Container } from "@mui/material";

import Navbar from "./navbar";
import Sidebar from "./sidebar";
export const HandleSidebar = createContext();

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <HandleSidebar.Provider value={{ isOpen, setIsOpen }}>
        <Navbar />
        <Container maxWidth="lg">
          <Sidebar />
          {children}
        </Container>
      </HandleSidebar.Provider>
    </>
  );
};

export default Layout;
