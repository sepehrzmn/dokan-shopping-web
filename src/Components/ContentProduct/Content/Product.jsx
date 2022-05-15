import React from "react";
import productImg from "../../../assets/image/violin.png";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Product() {
	return (
		<div className="SPC__product">
			<img src={productImg} alt="product" />
			<div className="body">
				<h2>ويولن سندنر مدل CV6-4/4</h2>
				<div className="body__content">
					<div>
						<span>تنها ۱ عدد در انبار باقی مانده</span>
						<div>
							<span>5</span>
							<Icon icon="bxs:star" fontSize={18} color="#ffe50b" />
						</div>
					</div>
					<div>
						<div>
							<span>۲,۹۰۴,۰۰۰</span>
							<span>تومان</span>
						</div>
						<motion.div
							whileHover={{
								scale: 1.4,
							}}
							whileTap={{
								scale: 1.4,
							}}
						>
							<Link
								to="/shopping/products/1"
								style={{ width: "100%", height: "100%" }}
							>
								<Icon icon="el:shopping-cart" fontSize={20} />{" "}
							</Link>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product;
