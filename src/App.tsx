import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <Box h="170px">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Box>
  );
}

export default App;
