import React from "react";
import { Link } from "react-router-dom";
import violin from "../../assets/image/violin.png";
import { motion } from "framer-motion";
function Product() {
	return (
		<Link to="/shopping/products/1">
			<motion.div
				whileHover={{
					scale: 1.05,
				}}
				className="Related-product"
			>
				<img src={violin} alt="violin" />
				<div className="body">
					<span>قیمت </span>
					<div>
						<span>۱,۹۳۷,۰۰۰</span>
						<span>تومان</span>
					</div>
				</div>
			</motion.div>
		</Link>
	);
}

export default Product;
