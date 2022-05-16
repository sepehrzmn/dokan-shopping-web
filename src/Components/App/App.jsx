import React from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar, FooterShopping, Login } from "../";
import { Home, Category, Shopping, Product } from "../pages/index";
import "./App.css";
import "../../assets/font/Yekan.css";

export default function App() {
	return (
		<>
			<Routes>
				<Route
					index
					path="/"
					element={
						<>
							<Navbar />
							<Home />
							<Footer />
						</>
					}
				/>
				<Route
					path="/shopping"
					element={
						<>
							<Navbar />
							<Shopping />
							<FooterShopping />
						</>
					}
				/>
				<Route
					path="/shopping/:category"
					element={
						<>
							<Navbar />
							<Category />
							<FooterShopping />
						</>
					}
				/>
				<Route
					path="/shopping/products/:id"
					element={
						<>
							<Navbar />
							<Product />
							<FooterShopping />
						</>
					}
				/>
				<Route
					path="/sing-up"
					element={
						<>
							<Login type="up" />
						</>
					}
				/>
				<Route
					path="/sing-in"
					element={
						<>
							<Login type="in" />
						</>
					}
				/>
			</Routes>
		</>
	);
}
