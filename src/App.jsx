import React from "react";
import { Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { LoginPage } from "./pages/LoginPage";
import { Task2Page } from "./pages/Task2Page";

export const App = () => {
	return (
		<>
			<Menu />
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route
					path="Task2Page/"
					element={<Task2Page message="Hello Task2Page" />}
				/>
			</Routes>
		</>
	);
};
