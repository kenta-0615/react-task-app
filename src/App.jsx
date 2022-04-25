import React from "react";
import { Routes, Route} from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { Task2Page } from "./pages/Task2Page";
import { PageMenu } from "../src/component/WebPageLayout/PageMenu"
import { memo } from "react";

export const App = memo(() => {

  return(
    <>
    <PageMenu />
   
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Task2Page" element={<Task2Page message="Hello Task2Page" />}/>
    </Routes>
    </>
  );
});






