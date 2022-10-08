import { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
import SignIn from "./pages/SignIn";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="d-flex w-100" id={theme}>
        <Router>
          <Menu theme={theme} toggleTheme={toggleTheme} />
          <div style={{ flex: 7 }}>
            <Navbar />
            <div style={{ padding: "20px 80px" }}>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="signin" element={<SignIn />} />
                  <Route path="video" >
                    <Route path=":id" element={<Video />} />
                  </Route>
                </Route>
          </Routes>
          </div>
      </div>
    </Router>
      </div >
    </ThemeContext.Provider >

  );
}

export default App;
