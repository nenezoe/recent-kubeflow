import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Documentation from "./Documentation";
import LandingPage from "./LandingPage";
import Started from "./StartedPage";

interface Props {}

function Pages(props: Props) {
  const {} = props;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/docs/started/" element={<Started />}></Route>
        <Route path="/docs/" element={<Documentation />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
