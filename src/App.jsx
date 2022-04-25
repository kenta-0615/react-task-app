import React from "react";
import { Routes, Route} from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { Task2Page } from "./pages/Task2Page";
import { memo } from "react";

export const App = memo(() => {
  return(
    <>
    <h1>Hello React Router v6</h1>
    <ul>
      <li>
        <a href="/">LoginPage</a>
      </li>
      <li>
        <a href="/Task2Page">Task2Page</a>
      </li>
    </ul>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Task2Page" element={<Task2Page message="Hello Task2Page" />}/>
    </Routes>
    </>
  );
});






