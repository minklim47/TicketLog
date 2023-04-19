import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { createTheme, colors, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Collection from "./pages/Collection";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Nav from "./components/Nav";
import CreateTicket from "./pages/CreateTicket";

function App() {
  const theme = createTheme({
    palette: {
      black: {
        main: "#212121",
        light: "#ABABAB",
        dark: "#424242"
      },
      white: {
        main: "#FAFAFA",
      },
      red: {
        main: "#B41B07",
      },
      blue: {
        main: "#1E5597",
      },
    },
  });
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Community" element={<Community />} />
            <Route path="/Collection" element={<Collection />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/CreateTicket" element={<CreateTicket />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
