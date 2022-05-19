import React from "react";
import productImg from "../../../assets/image/violin.png";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { truncate } from "../../../Data/Data";
function Product({ caption, count, rating, price, productId }) {
	return (
		<div className="SPC__product">
			<img
				src={`../images/allProducts/product-${productId}.png`}
				alt="product"
			/>
			<div className="body">
				<h2>{truncate(caption, 30)}</h2>
				<div className="body__content">
					<div>
						{count ? (
							count === "infinite" ? (
								<span style={{ color: "rgb(20, 217, 220)" }}>
									در انبار موجود است
								</span>
							) : (
								<span>تنها {count} عدد در انبار باقی مانده</span>
							)
						) : (
							<>
								<span style={{ color: "red" }}>نا موجود</span>
							</>
						)}
						<div>
							<span>{rating}</span>
							<Icon icon="bxs:star" fontSize={18} color="#ffe50b" />
						</div>
					</div>
					<div>
						<div>
							<span>{price}</span>
							<span>تومان</span>
						</div>
						{count && (
							<motion.div
								whileHover={{
									scale: 1.4,
								}}
								whileTap={{
									scale: 1.4,
								}}
							>
								<Link
									to={`/shopping/products/${productId}`}
									style={{ width: "100%", height: "100%" }}
								>
									<Icon icon="el:shopping-cart" fontSize={20} />{" "}
								</Link>
							</motion.div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
Product.defaultProps = {
	caption: PropTypes.string.isRequired,
	count: PropTypes.string.isRequired,
	rating: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	productId: PropTypes.number.isRequired,
};

export default Product;
