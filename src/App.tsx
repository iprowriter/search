import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Body from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
