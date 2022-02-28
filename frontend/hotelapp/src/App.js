import logo from "./logo.svg";
import "./App.css";
import Frontpage from "./components/Frontpage";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App ">
      <Router>
        <Routes>
          <Route path="/" element={<Frontpage />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
