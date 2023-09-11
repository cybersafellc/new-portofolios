import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "boxicons";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return (
    <div>
      <BrowserRouter basename="/new-portofolios">
        <Router>
          <Routes>
            <Route path="/new-portofolios" element={<Dashboard />} />
          </Routes>
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
