
import "./App.css";
import React from 'react';

import { createTheme, colors, ThemeProvider } from "@mui/material";
import { BrowserRouter, Routes, Route,useParams, useLocation} from "react-router-dom";
import Collection from "./pages/Collection";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Nav from "./components/Nav";
import CreateTicket from "./pages/CreateTicket";
import Account from "./pages/Account";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";


function App() {
  const theme = createTheme({
    palette: {
      black: {
        main: "#212121",
        light: "#ABABAB",
        dark: "#424242",
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

  return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div>
            <Nav />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/Community" element={<Community />} />
              <Route path="/Collection" element={<Collection />} />
              <Route
                path="/Profile/:userId"
                element={
                  <Profile />
                }
              />
              <Route path="/CreateTicket" element={<CreateTicket />} />
              <Route path="/Profile/:userId/edit" element={<Account />} />
              <Route path="/SignIn" element={<SignIn />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/ForgotPassword" element={<ForgotPassword />} />

            </Routes>
          </div>
        </BrowserRouter>
      </ThemeProvider>
      
  );
}

export default App;
