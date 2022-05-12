import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
function Header({ title, id, icon }) {
	return (
		<div className={`box-header box-header-bg-${id}`}>
			<motion.div
				className={`category-header category-header-bg-${id}`}
				whileInView={{
					scale: [0.8, 1, 0.8],
					borderRadius: ["20%", "40%", "20%"],
					rotate: [0, 360, 0],
				}}
				transition={{
					repeat: Infinity,
					duration: 2.5,
				}}
			>
				<div className={`SCSC-item-${id}`}>
					<img src={icon} alt={title} />
				</div>
				<h2>{title}</h2>
			</motion.div>
		</div>
	);
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
};

export default Header;
