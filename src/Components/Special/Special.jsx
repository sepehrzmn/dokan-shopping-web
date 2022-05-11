import React from "react";
import "./special.css";
import violin2 from "../../assets/image/violin2.png";
import { motion } from "framer-motion";
function Special() {
	const anime = {
		normal: {
			width:
				window.screen.width > 810
					? "30%"
					: window.screen.width > 450
					? "60%"
					: "70%",
		},
		hover: {
			width:
				window.screen.width > 810
					? "35%"
					: window.screen.width > 810
					? "80%"
					: "90%",
		},
		transition: {
			duration: 0.5,
			type: "keyframes",
		},
	};

	return (
		<div className="special">
			<div className="SSe-content">
				<motion.div
					initial="normal"
					whileHover="hover"
					transition="transition"
					whileTap="hover"
					variants={anime}
					className="item-1"
				>
					<div>
						<span>فروش ویژه</span>
						<span>ویولن</span>
					</div>
					<img src={violin2} alt="violin2" />
				</motion.div>
				<motion.div
					initial="normal"
					whileHover="hover"
					transition="transition"
					whileTap="hover"
					variants={anime}
					className="item-2"
				>
					{" "}
					<div>
						<span>فروش ویژه</span>
						<span>ویولن</span>
					</div>{" "}
					<img src={violin2} alt="violin2" />
				</motion.div>
				<motion.div
					initial="normal"
					whileHover="hover"
					transition="transition"
					whileTap="hover"
					variants={anime}
					className="item-3"
				>
					{" "}
					<div>
						<span>فروش ویژه</span>
						<span>ویولن</span>
					</div>{" "}
					<img src={violin2} alt="violin2" />
				</motion.div>
			</div>
		</div>
	);
}

export default Special;
