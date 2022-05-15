import React from "react";
import "./CompleteProductInfo.css";
import { Navbar, Intro, Specifications, Comments, Questions, Card } from "./";
import BuyProduct from "../BuyProduct/BuyProduct";

function CompleteProductInfo() {
	return (
		<div className="complete-product-info">
			<Navbar />
			<div style={{ display: "flex" }}>
				<div className="info">
					<Intro />
					<Specifications />
					<Comments />
					<Questions />
				</div>
				<div className="card">
					<BuyProduct />
				</div>
			</div>
		</div>
	);
}

export default CompleteProductInfo;
