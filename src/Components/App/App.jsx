import React, { useEffect } from "react";
import "./App.css";
import "../../assets/font/Yekan.css";
import Navbar from "../Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import ShoppingPage from "../ShoppingPage/ShoppingPage";

export default function App() {
	useEffect(() => {
		window.scrollTo({ behavior: "smooth" });
	});
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shopping" element={<ShoppingPage />} />
			</Routes>
			<Footer />
		</>
	);
}
