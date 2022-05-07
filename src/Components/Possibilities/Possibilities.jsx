import React from "react";
import "./Possibilities.css";
import concert from "../../assets/image/concert.png";
import tutorial from "../../assets/image/tutorial.png";
import { motion } from "framer-motion";

function Possibilities() {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1,
			}}
			className="possibilities"
		>
			<div className="p-tutorial">
				<div style={{ background: `url(${tutorial})` }} />
				<button className="PT-btn">
					<p>آموزش موسیقی</p>
				</button>
				<div className="p-dark" />
			</div>
			<div className="p-concert">
				<div style={{ background: `url(${concert})` }} />
				<button className="PC-btn">
					<p>کنسرت</p>
				</button>
				<div className="p-dark" />
			</div>
		</motion.div>
	);
}

export default Possibilities;
