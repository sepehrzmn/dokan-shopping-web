import React, { useEffect } from "react";
import { getDataCategory } from "../../../Data/Data";
import Header from "./Header.jsx";
import "./CategoryPage.css";
import { ContentProduct } from "../../index";
import { useParams } from "react-router-dom";
import CategoryShopping from "../../CategoryShopping/CategoryShopping.jsx";

function CategoryPage() {
	const { category } = useParams();
	const item = getDataCategory(category);
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);
	return (
		<>
			<div>
				<CategoryShopping />
				<Header title={item[0].name} icon={item[0].icons} id={item[0].id} />
				<ContentProduct category={false} />
			</div>
		</>
	);
}

export default CategoryPage;
