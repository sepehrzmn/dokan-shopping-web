import React from "react";
import SliderShopping from "../SliderShopping/SliderShopping";
import Special from "../Special/Special";

function ShoppingPage() {
	return (
		<>
			<div className="toolbar" />
			<div style={{ height: "100vh" }}>
				<SliderShopping />
				<Special />
			</div>
		</>
	);
}

export default ShoppingPage;
