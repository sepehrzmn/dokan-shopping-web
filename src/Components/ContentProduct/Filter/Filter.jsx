import React from "react";
import "./Filter.css";
import Search from "./Search";
import Category from "./Category";
import Brand from "./Brand";
import PriceRange from "./PriceRange";
import Available from "./Available";
import PropTypes from "prop-types";

function Filter({ category }) {
	return (
		<aside className="filter">
			<Search />
			{category ? <Category /> : null}
			<Brand />
			<PriceRange />
			<Available />
		</aside>
	);
}

Filter.protoTypes = {
	category: PropTypes.bool.isRequired,
};
export default Filter;
