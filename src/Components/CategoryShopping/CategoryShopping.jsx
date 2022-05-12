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
import { Link } from "react-router-dom";

function CategoryShopping() {
	const anime = {
		normal: {
			scale: window.screen.width > 1250 ? 1 : 0.8,
		},
		hover: {
			scale: window.screen.width > 1250 ? 1.15 : 1,
		},
	};

	const categories = [
		{ name: "ساز افکتی", slug: "effect", icons: pennFlute, id: 1 },
		{ name: "ساز بادی", slug: "windy", icons: bassoon, id: 2 },
		{ name: "ساز کوبه ای", slug: "kobe", icons: xylophone, id: 3 },
		{ name: "ساز دهنی", slug: "harmonica", icons: harmonica2, id: 4 },
		{ name: "ساز صفحه کلید دار", slug: "keyboardMaker", icons: piano, id: 5 },
		{ name: "ساز زهی", slug: "stringed", icons: guitar, id: 6 },
		{ name: "ساز الکترونیک", slug: "electronic", icons: theremin, id: 7 },
	];

	return (
		<div className="category-shopping">
			<div className="SCS-content">
				{categories.map((category) => {
					return (
						<motion.div
							initial="normal"
							whileHover="hover"
							whileTap="hover"
							variants={anime}
							key={category.id}
						>
							<Link
								to={`/shopping/${category.slug}`}
								style={{ padding: "5px 0" }}
								state={{ title: category.name, id: category.id }}
							>
								<div className={`SCSC-item-${category.id}`}>
									<img src={category.icons} alt={category.slug} />
								</div>
								<span>{category.name}</span>
							</Link>
						</motion.div>
					);
				})}
			</div>
		</div>
	);
}

export default CategoryShopping;
