import React, { useState } from "react";
import Header from "./components/Header/Header";
import Nades from "./components/Nades/Nades";
import Footer from "./components/footer/Footer";
import { SettingOutlined } from "@ant-design/icons";
import useLocalStorage from "use-local-storage";
import "./App.css";

import News from "./components/News/News";
import InfoPage from "./components/test/infoPage";
import logo from "./components/assets/logo.png";
import logodark from "./components/assets/logodark.png";

function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  const refreshPage = () => {
    window.location.reload(false);
  };

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
  const [showInfo, setShowInfo] = useState(0);
  const [showNews, setShowNews] = useState(0);

  const showInfoHandler = () => {
    if (showInfo === 0) {
      setShowInfo(1);
    } else {
      setShowInfo(0);
    }
  };

  const showNewshandler = () => {
    if (showNews === 0) {
      setShowNews(1);
    } else {
      setShowNews(0);
    }
  };

  return (
    <div className="app" data-theme={theme}>
      <div>
        <header className="header">
          <div className="logowrap">
            {changeLogo ? (
              <img
                onClick={refreshPage}
                className="logoheader"
                src={logo}
                alt="Nav atrasts"
              ></img>
            ) : (
              <img
                onClick={refreshPage}
                className="logoheader"
                src={logodark}
                alt="Nav atrasts"
              ></img>
            )}
          </div>
          <div className="faqWrap">
            <button className="faq" onClick={showInfoHandler}>
              Informācija
            </button>
          </div>
          <div className="faqWrapNews">
            <button className="faqNews" onClick={showNewshandler}>
              Jaunumi
            </button>
          </div>
        </header>
      </div>
      <div className="themeWrap">
        <button className="buttonHeader" onClick={switchTheme}>
          <SettingOutlined />
        </button>
      </div>
      <Header></Header>
      {showInfo ? <InfoPage></InfoPage> : <Nades></Nades>}
      {showNews ? <News></News> : <Nades></Nades>}
      <Footer></Footer>
    </div>
  );
}

export default App;
