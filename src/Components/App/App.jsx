import React from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar } from "../";
import { Home, Category, Shopping, Product } from "../pages/index";
import "./App.css";
import "../../assets/font/Yekan.css";

export default function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shopping" element={<Shopping />} />
				<Route path="/shopping/:category" element={<Category />} />
				<Route path="/shopping/products/:id" element={<Product />} />
			</Routes>
			<Footer />
		</>
	);
}
