import React from "react";
import Content from "./Content/Content";
import "./ContentProduct.css";
import Filter from "./Filter/Filter";

function ContentProduct() {
	return (
		<div className="ContentProduct">
			<Filter />
			<Content />
		</div>
	);
}

export default ContentProduct;
