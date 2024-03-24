import React from "react";
import AboutPage from "./pages/About";
import IndexPage from "./pages";
import ProjectPage from "./pages/Project";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return(
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App