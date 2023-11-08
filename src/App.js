import React from "react";
import { Outlet } from "react-router-dom";

import "./App.css";
import { Sidebar } from "./components";
import ListeChambres from "./components/ListeChambres";
import { Box } from "@mui/material";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Box className="App">
      {/* <Navbar /> */}
      <Box className="app-container">
        <Sidebar />

        {/* <ListeChambres /> */}
      </Box>
    </Box>
  );
}

export default App;
