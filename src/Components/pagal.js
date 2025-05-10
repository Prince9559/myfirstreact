import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Downloadproduct from "./Components/Downloadproduct";
import Shopping from "./Components/Shopping";

function App() {
  return (
    <Router>
      <div>
        <h1 className="fading-text"><i>Welcome to the Shopping Market</i></h1>

        <div style={{ textAlign: "center", marginBottom: "20px" }}>

          <Link to="/shopping" style={{ marginRight: "20px" }}>Shopping</Link>
          <Link to="/download">Store Data</Link>
          
        </div>

        <Routes>
          <Route path="/shopping" element={<Shopping />} />
          <Route path="/download" element={<Downloadproduct />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
