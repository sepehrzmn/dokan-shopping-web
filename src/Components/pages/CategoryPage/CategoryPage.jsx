import React, { useEffect, useState } from "react";
import { getDataCategory } from "../../../Data/Data";
import Header from "./Header.jsx";
import "./CategoryPage.css";
import { ContentProduct } from "../../index";
import { useParams } from "react-router-dom";
import CategoryShopping from "../../CategoryShopping/CategoryShopping.jsx";
import { useCategory } from "../../../contexts/category";
import { FilterProvider } from "../../../contexts/filter";

function CategoryPage() {
	const { category } = useParams();
	const item = getDataCategory(category);
	const pageItems = useCategory();
	const [data, setData] = useState();
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);
	useEffect(() => {
		pageItems &&
			setData(() => {
				return pageItems.CategoryItems.filter((item) => {
					return item.name === category;
				})[0];
			});
	}, [pageItems, category]);
	console.log(data);
	return (
		<>
			<div>
				<div className="toolbar" />
				<CategoryShopping />
				<Header title={item[0].name} icon={item[0].icons} id={item[0].id} />
				<FilterProvider>
					{data && <ContentProduct category={false} products={data.products} />}
				</FilterProvider>
			</div>
		</>
	);
}

export default CategoryPage;
