import React from "react";
import "./BuyProduct.css";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
function BuyProduct() {
	return (
		<div className="buy-product">
			<motion.div
				className="product-content"
				whileInView={{
					scale: [0.8, 1],
				}}
				transition={{
					duration: 0.5,
				}}
			>
				<ul className="attr-product">
					<li>
						<Icon icon="carbon:security" fontSize={25} />
						گارانتی اصالت و سلامت فیزیکی کالا
					</li>
					<li>
						<Icon icon="bi:clipboard2-plus" fontSize={25} />
						۱۵۰ امتیاز
					</li>
				</ul>
				<div className="price-product">
					<span>قیمت </span>
					<div>
						<span>۱,۹۳۷,۰۰۰</span>
						<span>تومان</span>
					</div>
				</div>
				<motion.div
					whileHover={{
						scale: 1.1,
						borderRadius: "10px",
					}}
					className="btn-buy"
				>
					افزودن به سبد
				</motion.div>
			</motion.div>
		</div>
	);
}

export default BuyProduct;
