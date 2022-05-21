import React from "react";
import "./CategoryShopping.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useShopping } from "../../contexts/Shopping";

function CategoryShopping() {
	const [data, setData] = useState(null);
	const anime = {
		normal: {
			scale: window.screen.width > 1250 ? 0.9 : 0.8,
		},
		hover: {
			scale: window.screen.width > 1250 ? 1.09 : 1,
		},
	};
	const items = useShopping();

	useEffect(() => {
		setData(items);
	}, [items]);

	return (
		<div className="category-shopping" id="category">
			<div className="SCS-content">
				{data &&
					data.category.map((category) => {
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
								>
									<div className={`SCSC-item-${category.id}`}>
										<img src={category.image} alt={category.slug} />
									</div>
									<span>{category.caption}</span>
								</Link>
							</motion.div>
						);
					})}
			</div>
		</div>
	);
}

export default CategoryShopping;
