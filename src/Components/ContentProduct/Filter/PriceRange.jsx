import React, { useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import classNames from "classnames/bind";
const MAX = 475000000;
const MIN = 0;

function PriceRange() {
	const [boxPriceRange, setBoxPriceRange] = useState(false);
	const [minVal, setMinVal] = useState(MIN);
	const [maxVal, setMaxVal] = useState(MAX);

	return (
		<motion.section
			animate={{
				height: boxPriceRange ? "200px" : "40px",
			}}
			className="FS-priceRange"
		>
			<motion.h3
				onClick={() => setBoxPriceRange(!boxPriceRange)}
				whileHover={{
					scale: 1.05,
				}}
			>
				<Icon icon="uil:slider-h-range" fontSize={25} />
				<span>محدوده قیمت</span>
				<motion.div
					animate={{
						rotateZ: boxPriceRange ? 180 : 0,
					}}
				>
					<Icon
						icon="ep:arrow-down"
						style={{ marginTop: "5px", marginRight: "10px" }}
					/>
				</motion.div>
			</motion.h3>
			<div className="slider-parent">
				<div className="box-slider">
					<input
						type="range"
						min={MIN}
						max={MAX}
						value={minVal}
						onChange={(e) => {
							const value = Math.min(+e.target.value, maxVal - 1);
							setMinVal(value);
							console.log(value);
							e.target.value = value.toString();
						}}
						className={classNames("thumb thumb--zindex-3", {
							"thumb--zindex-5": minVal > 8 - 100,
						})}
						dir={"ltr"}
					/>
					<input
						type="range"
						min={MIN}
						max={MAX}
						className="thumb thumb-zIndex-4"
						value={maxVal}
						dir={"ltr"}
						onChange={(e) => {
							const value = Math.max(+e.target.value, minVal + 1);
							setMaxVal(+value);
							e.target.value = value.toString();
						}}
					/>
					<div className="slider-track" />
					<div className="slider-range" />
					<div className="slider__left-value">{minVal}</div>
					<div className="slider__right-value">{maxVal}</div>
					<div className="slider__input">
						<input
							type="number"
							value={minVal}
							onChange={(e) => {
								if (+e.target.value < 0) return;
								setMinVal(+e.target.value);
							}}
						/>
						تومان
						<input
							type="number"
							value={maxVal}
							onChange={(e) => {
								maxVal(+e.target.value);
							}}
						/>
						تومان
					</div>
				</div>
			</div>
		</motion.section>
	);
}

export default PriceRange;
