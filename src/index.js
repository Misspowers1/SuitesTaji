import React from "react";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import BookRoom from "./pages/BookRoom";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Order from "./pages/Order";

const rootElement = document.getElementById("root");
render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/home" element={<Home />} />
		</Routes>
	</BrowserRouter>,
	rootElement
);
