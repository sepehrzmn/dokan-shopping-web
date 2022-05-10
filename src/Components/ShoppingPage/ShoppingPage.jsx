import React from "react";
import CategoryShopping from "../CategoryShopping/CategoryShopping";
import NewProduction from "../NewProduction/NewProduction";
import Proposal from "../Proposal/Proposal";
import SliderShopping from "../SliderShopping/SliderShopping";
import Special from "../Special/Special";

function ShoppingPage() {
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
