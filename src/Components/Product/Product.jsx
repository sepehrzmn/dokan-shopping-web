import React from "react";
import "./Product.css";
import violin from "../../assets/image/violin.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Product() {
	return (
		<Link to="/product">
			<motion.div
				initial={{
					fontSize: "16px",
				}}
				whileHover={{
					scale: 1.05,
					fontSize: "22px",
				}}
				transition={{
					type: "keyframes",
				}}
				className="product"
			>
				<div className="p-media">
					<img src={violin} alt="violin" />
				</div>
				<div className="p-body">
					<h2 className="p-title"> ويولن سندنر مدل CV6-4/4</h2>
					<div className="p-info">
						<span>تنها ۱ عدد در انبار باقی مانده</span>
						<div className="p-score">
							<span>5</span>
							<Icon icon="bxs:star" fontSize={18} color="#ffe50b" />
						</div>
					</div>
					<div className="p-price">
						<span>۲,۹۰۴,۰۰۰</span>
						<span>تومان</span>
					</div>
				</div>
			</motion.div>
		</Link>
	);
}

export default Product;
