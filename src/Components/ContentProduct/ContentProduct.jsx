import React, { useEffect, useRef, useState } from "react";
import Content from "./Content/Content";
import "./ContentProduct.css";
import Filter from "./Filter/Filter";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useFilter } from "../../contexts/filter";

function ContentProduct({ products, category }) {
	const [menuMobile, setMenuMobile] = useState(false);
	const content = useRef();
	const { setAllProduct } = useFilter();

	const variants = {
		open: { display: "block", opacity: 1, x: 0 },
		closed: { display: "none", opacity: 0, x: "-100%" },
	};

	useEffect(() => {
		if (menuMobile) {
			content.current.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, [menuMobile]);

	function updateMenuMobile() {
		setMenuMobile(!menuMobile);
	}
	useEffect(() => {
		setAllProduct(products);
	}, []);
	return (
		<div className="ContentProduct" smooth={true} ref={content} id="products">
			<motion.div
				className="bg-dark"
				animate={menuMobile ? "open" : "closed"}
				variants={variants}
				onClick={updateMenuMobile}
			/>
			<motion.div
				className="menu-content-product-icon"
				onClick={updateMenuMobile}
			>
				<Icon icon="fluent:filter-dismiss-24-filled" fontSize={25} rotate={2} />
			</motion.div>
			<motion.div
				initial="closed"
				className="menu-mobile"
				animate={menuMobile ? "open" : "closed"}
				variants={variants}
				style={{ position: "absolute" }}
			>
				<Filter />
			</motion.div>
			<div className="d-none">
				<Filter category={category} />
			</div>
			{products && <Content products={products} />}
		</div>
	);
}
ContentProduct.protoTypes = {
	category: PropTypes.bool.isRequired,
};

export default ContentProduct;
