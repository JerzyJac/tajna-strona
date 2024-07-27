import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import SecretPage from "./components/SecretPage";
import useAuth from "./hooks/useAuth";
import "./App.css";

function App() {
  const { isAuthenticated, login } = useAuth();

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Główna</Link>
            </li>
            <li>
              <Link to="/about">O firmie</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home login={login} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/secret"
            element={isAuthenticated ? <SecretPage /> : <Navigate to="/" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
