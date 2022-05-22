import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Footer, Navbar, FooterShopping, Login } from "../";
import { Home, Category, Shopping, Product, Dashboard } from "../pages/index";
import "./App.css";
import "../../assets/font/Yekan.css";
import { HomeProvider } from "../../contexts/home";
import { ShoppingProvider } from "../../contexts/Shopping";
import { CategoryProvider } from "../../contexts/category";
import { useLocalStorage } from "../../hooks/LocalStorage";
import { UserProvider } from "../../contexts/user";

export default function App() {
	const [id, setId] = useLocalStorage("id");

	return (
		<>
			<UserProvider id={id}>
				<Routes>
					<Route
						index
						path="/"
						element={
							<>
								<Navbar />
								<HomeProvider>
									<Home />
								</HomeProvider>
								<Footer />
							</>
						}
					/>
					<Route
						path="/shopping"
						element={
							<>
								<Navbar />
								<ShoppingProvider>
									<Shopping />
								</ShoppingProvider>
								<FooterShopping />
							</>
						}
					/>
					<Route
						path="/shopping/:category"
						element={
							<>
								<Navbar />
								<ShoppingProvider>
									<CategoryProvider>
										<Category />
									</CategoryProvider>
									<FooterShopping />
								</ShoppingProvider>
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
					{!id && (
						<Route
							path="/sing-up"
							element={
								<>
									<Login type="up" setId={setId} />
								</>
							}
						/>
					)}
					{!id && (
						<Route
							path="/sing-in"
							element={
								<>
									<Login type="in" setId={setId} />
								</>
							}
						/>
					)}
					<Route
						path="/dashboard"
						element={
							<>
								<Dashboard />
							</>
						}
					/>
				</Routes>
			</UserProvider>
		</>
	);
}
