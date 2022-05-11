import React from "react";
import productImg from "../../../assets/image/violin.png";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

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
								scale: 1.1,
								rotateX: 360,
							}}
							transition={{
								duration: 0.5,
							}}
						>
							<Icon icon="el:shopping-cart" fontSize={20} />{" "}
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Product;
