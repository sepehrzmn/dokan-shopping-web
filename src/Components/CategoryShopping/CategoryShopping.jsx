import React from "react";
import "./CategoryShopping.css";
import pennFlute from "../../assets/image/penny.png";
import bassoon from "../../assets/image/bassoon.png";
import xylophone from "../../assets/image/xylophone.png";
import harmonica2 from "../../assets/image/harmonica2.png";
import piano from "../../assets/image/piano-2.png";
import guitar from "../../assets/image/guitar-2.png";
import theremin from "../../assets/image/theremin.png";
import { motion } from "framer-motion";

function CategoryShopping() {
	return (
		<div className="category-shopping">
			<div className="SCS-content">
				<motion.div
					whileHover={{
						scale: 1.2,
					}}
				>
					<div className="SCSC-item-1">
						<img src={pennFlute} alt="penn Flute" />
					</div>
					<span>ساز افکتی</span>
				</motion.div>
				<motion.div
					whileHover={{
						scale: 1.2,
					}}
				>
					<div className="SCSC-item-2">
						<img src={bassoon} alt="bassoon" />
					</div>
					<span>ساز بادی</span>
				</motion.div>
				<motion.div
					whileHover={{
						scale: 1.2,
					}}
				>
					<div className="SCSC-item-3">
						<img src={xylophone} alt="xylophone" />
					</div>
					<span>ساز کوبه ای </span>
				</motion.div>
				<motion.div
					whileHover={{
						scale: 1.2,
					}}
				>
					<div className="SCSC-item-4">
						<img src={harmonica2} alt="harmonica" />
					</div>
					<span>ساز دهنی</span>
				</motion.div>
				<motion.div
					whileHover={{
						scale: 1.2,
					}}
				>
					<div className="SCSC-item-5">
						<img src={piano} alt="piano" />
					</div>
					<span>ساز صفحه کلید دار</span>
				</motion.div>
				<motion.div
					whileHover={{
						scale: 1.2,
					}}
				>
					<div className="SCSC-item-6">
						<img src={guitar} alt="guitar" />
					</div>
					<span>ساز زهی</span>
				</motion.div>

				<motion.div
					whileHover={{
						scale: 1.2,
					}}
				>
					<div className="SCSC-item-7">
						<img src={theremin} alt="theremin" />
					</div>
					<span>ساز الکترونیک</span>
				</motion.div>
			</div>
		</div>
	);
}

export default CategoryShopping;
