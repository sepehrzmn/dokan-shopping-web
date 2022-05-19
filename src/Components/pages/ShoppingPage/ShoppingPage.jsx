import React, { useEffect } from "react";
import { FilterProvider } from "../../../contexts/filter";
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
			<div>
				<SliderShopping />
				<Special />
				<Proposal />
				<CategoryShopping />
				<FilterProvider>
					<NewProduction />
				</FilterProvider>
			</div>
		</>
	);
}

export default ShoppingPage;
