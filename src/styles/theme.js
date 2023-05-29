import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          margin: 0,
          padding: 0,
          boxSizing: "border-box",
          fontFamily: '"Montserrat", "Tilt Neon", "cursive"',
        },
      },
    },
  },
  palette: {
    wafer: {
      main: "#ffd166 ",
    },
  },
});
