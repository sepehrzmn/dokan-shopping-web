import React from "react";
import "./Product.css";
import violin from "../../assets/image/violin.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { ConvertNumberToPersian } from "../../Data/Data";
function Product({ caption, count, rating, price, id }) {
	return (
		<Link to="/shopping/products/1">
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
					<img src={`../images/products/product${id}.png`} alt="violin" />
				</div>
				<div className="p-body">
					<h2 className="p-title"> {caption}</h2>
					<div className="p-info">
						{count === "infinite" ? (
							<span style={{ color: "rgb(20, 217, 220)" }}>
								در انبار موجود است
							</span>
						) : (
							<span>تنها {count} عدد در انبار باقی مانده</span>
						)}
						<div className="p-score">
							<span>{rating}</span>
							<Icon icon="bxs:star" fontSize={18} color="#ffe50b" />
						</div>
					</div>
					<div className="p-price">
						<span>{ConvertNumberToPersian(price)}</span>
						<span>تومان</span>
					</div>
				</div>
			</motion.div>
		</Link>
	);
}
Product.protoTypes = {
	caption: PropTypes.string.isRequired,
	count: PropTypes.string.isRequired,
	rating: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
};
export default Product;
