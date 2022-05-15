import React, { useEffect } from "react";
import "./Product.css";
import {
	ProductSlider,
	ProductInformation,
	BuyProduct,
	RelatedProducts,
	CompleteProductInfo,
} from "../../";

function Product() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	return (
		<>
			<div className="product-introduction">
				<ProductSlider />
				<ProductInformation />
				<BuyProduct />
			</div>
			<RelatedProducts />
			<CompleteProductInfo />
		</>
	);
}

export default Product;
