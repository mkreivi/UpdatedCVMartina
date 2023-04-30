import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";

function App() {
  return (
    <div>
      <Header />
      <h1>Hello World</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
