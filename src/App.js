import React, { useState } from "react";
import Header from "./components/Header/Header";
import Nades from "./components/Nades/Nades";
import Footer from "./components/footer/Footer";
import { SettingOutlined } from "@ant-design/icons";
import useLocalStorage from "use-local-storage";
import "./App.css";

import logo from "./components/assets/logo.png";
import logodark from "./components/assets/logodark.png";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const switchTheme = () => {
    if (changeLogo === true) {
      setChangeLogo(false);
    } else {
      setChangeLogo(true);
    }
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    console.log(newTheme);
  };

  const [changeLogo, setChangeLogo] = useState(true);

  return (
    <div className="app" data-theme={theme}>
      <div>
        <header className="header">
          <div className="logowrap">
            {changeLogo ? (
              <img className="logoheader" src={logo} alt="Nav atrasts"></img>
            ) : (
              <img
                className="logoheader"
                src={logodark}
                alt="Nav atrasts"
              ></img>
            )}
          </div>
        </header>
      </div>
      <div className="themeWrap">
        <button className="buttonHeader" onClick={switchTheme}>
          <SettingOutlined />
        </button>
      </div>
      <Header></Header>
      <Nades />
      <Footer></Footer>
    </div>
  );
}

export default App;
