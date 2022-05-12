import React, { useEffect } from "react";
import {
	Special,
	SliderShopping,
	Proposal,
	NewProduction,
	CategoryShopping,
} from "../../index";
function ShoppingPage() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);
	return (
		<>
			<div className="toolbar" />
			<div>
				<SliderShopping />
				<Special />
				<Proposal />
				<CategoryShopping />
				<NewProduction />
			</div>
		</>
	);
}

export default ShoppingPage;
