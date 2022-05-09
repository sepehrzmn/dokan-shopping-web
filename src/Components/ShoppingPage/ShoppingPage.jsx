import React from "react";
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
			</div>
		</>
	);
}

export default ShoppingPage;
