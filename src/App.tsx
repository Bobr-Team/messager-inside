import React from "react";

//import AuthComponent from "@Components/Auth/index";

import AuthComponent from "../src/Components/Auth/index";
import RegistrationComponent from "../src/Components/Registration";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import { blue, indigo } from "@mui/material/colors";

export default function App() {
  let theme = createTheme({
    palette: {
        primary: indigo,
        secondary: blue,
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<AuthComponent />}></Route>
        <Route path="/registration" element={<RegistrationComponent />}></Route>
      </Routes>
    </ThemeProvider>
  );
}
