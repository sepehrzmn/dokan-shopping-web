import React, { useEffect, useState } from "react";
import "./BuyProduct.css";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useProduct } from "../../contexts/products";
import { ConvertNumberToPersian } from "../../Data/Data";
import { useCart } from "../../contexts/cart";
function BuyProduct() {
	const [info, setInfo] = useState(null);
	const productItems = useProduct();
	const { add } = useCart();
	useEffect(() => {
		productItems && setInfo(productItems);
	}, [productItems]);

	function addToCart() {
		add(info);
	}
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
						<span>{info && ConvertNumberToPersian(info.price)}</span>
						<span>تومان</span>
					</div>
				</div>
				<motion.div
					whileHover={{
						scale: 1.1,
						borderRadius: "10px",
					}}
					className="btn-buy"
					onClick={addToCart}
				>
					افزودن به سبد
				</motion.div>
			</motion.div>
		</div>
	);
}

export default BuyProduct;
