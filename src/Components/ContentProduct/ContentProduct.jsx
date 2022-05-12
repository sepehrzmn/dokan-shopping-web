import React, { useState } from "react";
import Content from "./Content/Content";
import "./ContentProduct.css";
import Filter from "./Filter/Filter";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

function ContentProduct({ category }) {
	const [menuMobile, setMenuMobile] = useState(false);
	const variants = {
		open: { opacity: 1, x: 0 },
		closed: { opacity: 0, x: "-100%" },
	};
	return (
		<div className="ContentProduct">
			<motion.div
				className="bg-dark"
				animate={menuMobile ? "open" : "closed"}
				variants={variants}
			/>

			<motion.div
				className="menu-content-product-icon"
				onClick={() => setMenuMobile(!menuMobile)}
			>
				<Icon icon="fluent:filter-dismiss-24-filled" fontSize={25} rotate={2} />
			</motion.div>
			<motion.div
				className="menu-mobile"
				animate={menuMobile ? "open" : "closed"}
				variants={variants}
				style={{ position: "absolute" }}
			>
				<Filter />
			</motion.div>
			<div className="d-none">
				<Filter />
			</div>
			<Content category={category} />
		</div>
	);
}
ContentProduct.protoTypes = {
	category: PropTypes.bool.isRequired,
};

export default ContentProduct;
