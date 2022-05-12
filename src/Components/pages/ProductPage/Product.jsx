import React, { useEffect } from "react";
import "./Product.css";
function Product() {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);
	return <div>Product</div>;
}

export default Product;
