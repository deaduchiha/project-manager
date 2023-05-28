import { theme } from "@/styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Layout from "@/components/layout/layout";

const Providers = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>{children}</Layout>
    </ThemeProvider>
  );
};

export default Providers;
