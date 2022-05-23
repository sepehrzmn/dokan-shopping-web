import React from "react";
import "./Content.css";
import Product from "./Product";
import PropTypes from "prop-types";
import { useFilter } from "../../../contexts/filter";
function Content({ products }) {
	const {
		output,
		minItems,
		maxItems,
		selectCategory,
		selectBrands,
		existence,
	} = useFilter();
	function calcRange(min, max) {
		let range = [];
		const selCat = selectCategory();
		const selBar = selectBrands();

		if (output.length) {
			if (selCat.length) {
				let NewRange;
				NewRange = selCat.map((category) => {
					return output.filter((product) => {
						return existence
							? product.count.length !== 0 &&
									product.category === category.slug &&
									min <= +product.price &&
									max >= +product.price
							: product.category === category.slug &&
									min <= +product.price &&
									max >= +product.price;
					});
				});

				range = [].concat.apply([], NewRange);
			} else {
				range = output.filter((product) => {
					return existence
						? product.count.length !== 0 &&
								min <= +product.price &&
								max >= +product.price
						: min <= +product.price && max >= +product.price;
				});
			}
		} else {
			let NewRange;
			if (selCat.length) {
				if (selBar.length) {
					NewRange = selCat.map((category) => {
						return selBar.map((brand) => {
							return products.filter((product) => {
								return existence
									? product.count.length !== 0 &&
											product.brand.en.toString() ==
												brand.caption.en.toString() &&
											min <= +product.price &&
											max >= +product.price
									: product.category === category.slug &&
											product.brand.en.toString() ==
												brand.caption.en.toString() &&
											min <= +product.price &&
											max >= +product.price;
							});
						});
					});
					range = [].concat.apply([], NewRange);
					range = [].concat.apply([], range);
				} else {
					NewRange = selCat.map((category) => {
						return products.filter((product) => {
							return existence
								? product.count.length !== 0 &&
										product.category === category.slug &&
										min <= +product.price &&
										max >= +product.price
								: product.category === category.slug &&
										min <= +product.price &&
										max >= +product.price;
						});
					});
					range = [].concat.apply([], NewRange);
				}
			} else {
				if (selBar.length) {
					NewRange = selBar.map((brand) => {
						return products.filter((product) => {
							return existence
								? product.count.length !== 0 &&
										product.brand.en.toString() ==
											brand.caption.en.toString() &&
										min <= +product.price &&
										max >= +product.price
								: product.brand.en.toString() == brand.caption.en.toString() &&
										min <= +product.price &&
										max >= +product.price;
						});
					});
					range = [].concat.apply([], NewRange);
				} else {
					range = products.filter((product) => {
						return existence
							? product.count.length !== 0 &&
									min <= +product.price &&
									max >= +product.price
							: min <= +product.price && max >= +product.price;
					});
				}
			}
		}
		return range;
	}
	return (
		<div className="content">
			<div className="SCC__content">
				{
					<>
						{calcRange(minItems, maxItems) &&
							calcRange(minItems, maxItems).map((item, index) => {
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
