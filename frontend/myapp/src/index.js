import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components.js/home";
import About from "./components.js/about";
import Projects from "./components.js/projects";
import Services from "./components.js/services";
import Html from "./components.js/services components/html";
import Css from "./components.js/services components/css";
import Js from "./components.js/services components/js";
import Ts from "./components.js/services components/ts";
import Git from "./components.js/services components/git";
import ReactComponent from "./components.js/services components/react";
import Postgres from "./components.js/services components/postgres";
import Mongo from "./components.js/services components/mongo";
import Github from "./components.js/services components/github";
import Wordpress from "./components.js/services components/wordpress";
import Angular from "./components.js/services components/angular";
import Bootstrap from "./components.js/services components/bootstrap";
import MaterialUi from "./components.js/services components/materialui";
import Antd from "./components.js/services components/antd";
import Project1 from "./components.js/projects component/project1";

const MainApp = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/html" element={<Html />} />
          <Route path="/css" element={<Css />} />
          <Route path="/js" element={<Js />} />
          <Route path="/ts" element={<Ts />} />
          <Route path="/git" element={<Git />} />
          <Route path="/React" element={<ReactComponent />} />
          <Route path="/angular" element={<Angular />} />
          <Route path="/antd" element={<Antd />} />
          <Route path="/bootstrap" element={<Bootstrap />} />
          <Route path="/github" element={<Github />} />
          <Route path="/postgres" element={<Postgres />} />
          <Route path="/mongo" element={<Mongo />} />
          <Route path="/wordpress" element={<Wordpress />} />
          <Route path="/materialUi" element={<MaterialUi />} />
          <Route path="/project1" element={<Project1 />} />
        </Routes>
      </Router>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
);
