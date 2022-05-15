import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { motion } from "framer-motion";
const DATA_BASE = [
	{
		caption: "نوع ساز:",
		value: "ویولن",
		id: 1,
	},
	{
		caption: "اندازه:",
		value: "4/4",
		id: 2,
	},
	{
		caption: "وزن:",
		value: "۴۵۰ گرم",
		id: 3,
	},
	{
		caption: "سیستم صدا:",
		value: "آکوستیک",
		id: 4,
	},
	{
		caption: "جنس بدنه:",
		value: "",
		id: 5,
	},
	{
		caption: "جنس صفحه رویی:",
		value: "افرا",
		id: 6,
	},
	{
		caption: "جنس صفحه پشتی:",
		value: "افرا",
		id: 7,
	},
	{
		caption: "جنس چانه‌گاه:",
		value: "آبنوس",
		id: 8,
	},
	{
		caption: "جنس صفحه انگشت گذاری:",
		value: "",
		id: 9,
	},
	{
		caption: "جنس گوشی‌ها:",
		value: "",
		id: 10,
	},
	{
		caption: "جنس آرشه:",
		value: "ندارد",
		id: 11,
	},
	{
		caption: "اقلام همراه:",
		value: "هارد کیس ",
		id: 12,
	},
];
function Specifications() {
	const [shorten, setShorten] = useState(true);
	return (
		<div id="specifications" className="specifications">
			<h3 className="title">مشخصات</h3>
			<motion.div
				className="spec-list"
				animate={{ height: shorten ? "200px" : "max-content" }}
			>
				<span>مشخصات</span>
				<ul>
					{DATA_BASE.map(({ caption, id, value }) => (
						<li key={id}>
							<span>{caption}</span>
							<span>{value}</span>
						</li>
					))}
				</ul>
			</motion.div>
			<button className="btn" onClick={() => setShorten(!shorten)}>
				<Icon icon="bi:arrow-return-left" />
				{shorten ? "بیشتر" : "بستن"}
			</button>
		</div>
	);
}

export default Specifications;
