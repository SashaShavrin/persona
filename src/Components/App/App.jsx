import React, { useState } from "react";
import { Header } from "../Header/Header";
import { MiniHeader } from "../MiniHeader/component";
import classNames from "classnames";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../HomePage/component";
import { PageCase } from "../PageCase/component";

export const App = () => {
  const [showMiniHeader, setMiniHeader] = useState(true);

  return (
    <React.Fragment>
      <Header showMiniHeader={showMiniHeader}>
        <MiniHeader
          showMiniHeader={showMiniHeader}
          setMiniHeader={setMiniHeader}
        />
      </Header>
      <div className={classNames("wrapper", showMiniHeader && "wrapper_top")}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/case" element={<PageCase />}>
              <Route
                path=":caseId"
                element={<PageCase />}
                preventScrollReset={true}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
};
