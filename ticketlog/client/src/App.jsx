import "./App.css";
import React, { useEffect, useState } from "react";

import { createTheme, colors, ThemeProvider } from "@mui/material";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  useLocation,
  Navigate,
} from "react-router-dom";
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  function checkAuthentication() {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    checkAuthentication();
  }, []);

  function onSignOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    checkAuthentication();
  }
  function onSignIn() {
    checkAuthentication();
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div>
          <Nav />
          {isAuthenticated ? (
            <Routes>
              <Route exact path="/Home/:userId" element={<Home />} />
              <Route path="/Community" element={<Community />} />
              <Route path="/Collection" element={<Collection />} />
              <Route
                path="/Profile/:userId"
                element={<Profile onSignOut={onSignOut} />}
              />
              <Route path="/CreateTicket" element={<CreateTicket />} />
              <Route path="/Profile/:userId/edit" element={<Account />} />
              <Route path="/SignIn" element={<SignIn onSignIn={onSignIn} />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/ForgotPassword" element={<ForgotPassword />} />
            </Routes>
          ) : (
            <Routes>
              <Route path="/SignIn" element={<SignIn onSignIn={onSignIn} />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/ForgotPassword" element={<ForgotPassword />} />
              <Route path="/*" element={<Navigate to="/SignIn" replace />} />
            </Routes>
          )}
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
