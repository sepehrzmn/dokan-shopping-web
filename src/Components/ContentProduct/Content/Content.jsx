import React from "react";
import "./Content.css";
import Product from "./Product";
import PropTypes from "prop-types";
import { useFilter } from "../../../contexts/filter";
function Content({ products }) {
	const { F_search, R_category, R_brand, R_Range, R_Available } = useFilter();

	return (
		<div className="content">
			<div className="SCC__content">
				{R_Available.length ? (
					<>
						{R_Available.map((item, index) => {
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
				) : R_Range.length ? (
					<>
						{R_Range.map((item, index) => {
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
				) : R_brand.length ? (
					<>
						{R_brand.map((item, index) => {
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
				) : R_category.length ? (
					<>
						{R_category.map((item, index) => {
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
				) : F_search.length ? (
					<>
						{F_search.map((item, index) => {
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
				) : (
					<>
						{products.map((item, index) => {
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
				)}
			</div>
		</div>
	);
}
Content.defaultProps = {
	products: PropTypes.array.isRequired,
};

export default Content;
