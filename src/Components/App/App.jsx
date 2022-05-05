import React from "react";
import "./App.css";
import "../../assets/font/Yekan.css";
import Navbar from "../Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";

export default function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<Footer />
		</>
	);
}
