import React from "react";
import "./Filter.css";
import Search from "./Search";
import Category from "./Category";
import Brand from "./Brand";
import PriceRange from "./PriceRange";
import Available from "./Available";
function Filter() {
	return (
		<aside className="filter">
			<Search />
			<Category />
			<Brand />
			<PriceRange />
			<Available />
		</aside>
	);
}

export default Filter;
