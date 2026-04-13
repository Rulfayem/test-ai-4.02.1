import Navbar from "./Components/Navbar";
import Grades from "./Components/Grades";
import Counter from "./Components/Counter";
import Triangle from "./Components/Triangle";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "jquery/dist/jquery.js";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar />
            <Home />
          </>
        }
      />

      <Route
        path="/grades"
        element={
          <>
            <Navbar />
            <Grades />
          </>
        }
      />

      <Route
        path="/counter"
        element={
          <>
            <Navbar />
            <Counter />
          </>
        }
      />

      <Route
        path="/triangle"
        element={
          <>
            <Navbar />
            <Triangle />
          </>
        }
      />
    </Routes>
  );
}

export default App;
