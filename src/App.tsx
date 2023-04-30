import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";

function App() {
  return (
    <Box h="170px">
      <Header />
      <h1>Hello World</h1>
      <main>
        <Outlet />
      </main>
    </Box>
  );
}

export default App;
