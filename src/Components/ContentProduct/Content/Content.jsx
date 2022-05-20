import React from "react";
import "./Content.css";
import Product from "./Product";
import PropTypes from "prop-types";
import { useFilter } from "../../../contexts/filter";
function Content({ products }) {
	const { output, minItems, MaxItems } = useFilter();
	function calcRange(min, max) {
		let range = [];
		if (output.length) {
			range = output.filter((product) => {
				return min <= +product.price && max >= +product.price;
			});
		} else {
			range = products.filter((product) => {
				return min <= +product.price && max >= +product.price;
			});
		}
		return range;
	}
	return (
		<div className="content">
			<div className="SCC__content">
				{
					<>
						{calcRange(minItems, MaxItems) &&
							calcRange(minItems, MaxItems).map((item, index) => {
								return (
									<Product
										key={item.id}
										caption={item.caption}
										count={item.count}
										price={item.price}
										productId={item.product_id}
										rating={item.rating}
									/>
								);
							})}
					</>
				}
			</div>
		</div>
	);
}
Content.defaultProps = {
	products: PropTypes.array.isRequired,
};

export default Content;
