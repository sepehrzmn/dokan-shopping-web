import React from "react";
import "./special.css";
import violin2 from "../../assets/image/violin2.png";
import { motion } from "framer-motion";
function Special() {
	return (
		<div className="special">
			<div className="SSe-content">
				<motion.div
					initial={{
						width: "30%",
					}}
					whileHover={{
						width: "35%",
					}}
					transition={{
						duration: 0.5,
						type: "keyframes",
					}}
					className="item-1"
				>
					<div>
						<span>فروش ویژه</span>
						<span>ویولن</span>
					</div>
					<img src={violin2} alt="violin2" />
				</motion.div>
				<motion.div
					initial={{
						width: "30%",
					}}
					whileHover={{
						width: "35%",
					}}
					transition={{
						duration: 0.5,
						type: "keyframes",
					}}
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
					initial={{
						width: "30%",
					}}
					whileHover={{
						width: "35%",
					}}
					transition={{
						duration: 0.5,
						type: "keyframes",
					}}
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
