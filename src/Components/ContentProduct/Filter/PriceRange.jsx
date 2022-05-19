import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import classNames from "classnames/bind";
import { useFilter } from "../../../contexts/filter";
const MAX = 475000001;
const MIN = 0;

function PriceRange() {
	const [boxPriceRange, setBoxPriceRange] = useState(false);
	const [minVal, setMinVal] = useState(MIN);
	const [maxVal, setMaxVal] = useState(MAX);
	const { calcRange, selectBrand, category } = useFilter();
	useEffect(() => {
		calcRange(minVal, maxVal);
	}, [minVal, maxVal]);
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
							const value = Math.min(+e.target.value, maxVal - 50000);
							setMinVal(value);
							console.log(value);
							e.target.value = value.toString();
						}}
						className="thumb thumb--zindex-5"
						dir={"ltr"}
					/>
					<input
						type="range"
						min={MIN}
						max={MAX}
						className="thumb thumb-zIndex-6"
						value={maxVal}
						dir={"ltr"}
						onChange={(e) => {
							const value = Math.max(+e.target.value, minVal + 50000);
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
								const value = Math.min(+e.target.value, maxVal - 1);
								setMinVal(value);
								console.log(value);
								e.target.value = value.toString();
							}}
							min={MIN}
							max={maxVal}
						/>
						تومان
						<input
							type="number"
							value={maxVal}
							onChange={(e) => {
								const value = Math.max(+e.target.value, minVal + 1);
								setMaxVal(+value);
								e.target.value = value.toString();
							}}
							min={minVal}
							max={MAX}
						/>
						تومان
					</div>
				</div>
			</div>
		</motion.section>
	);
}

export default PriceRange;
