import React, { useEffect } from "react";
import "./Product.css";
import {
	ProductSlider,
	ProductInformation,
	BuyProduct,
	RelatedProducts,
	CompleteProductInfo,
} from "../../";
import { ProductProvider } from "../../../contexts/products";
import { useParams } from "react-router-dom";

function Product() {
	const { id } = useParams();

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, [id]);

	return (
		<>
			<ProductProvider id={id}>
				<div className="product-introduction">
					<ProductSlider />
					<ProductInformation />
					<BuyProduct />
				</div>
				<RelatedProducts />
				<CompleteProductInfo />
			</ProductProvider>
		</>
	);
}

export default Product;
