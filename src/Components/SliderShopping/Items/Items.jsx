import React from "react";
import "./Items.css";
import brand from "../../../assets/image/yamaha-logo.png";
import product from "../../../assets/image/piano.png";

function Items() {
	return (
		<div className="SS-item">
			<div className="SSI-brand">
				<img src={brand} alt="yamaha" />
				<h2> پیانو آکوستیک یاماها مدل GB1K</h2>
			</div>
			<div className="SSI-product">
				<img src={product} alt="product" />
			</div>
		</div>
	);
}

export default Items;
