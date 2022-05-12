import React, { useEffect } from "react";
import Header from "./Header.jsx";
import "./CategoryPage.css";
import { ContentProduct } from "../../index";
import { useParams } from "react-router-dom";
import CategoryShopping from "../../CategoryShopping/CategoryShopping.jsx";
import pennFlute from "../../../assets/image/penny.png";
import bassoon from "../../../assets/image/bassoon.png";
import xylophone from "../../../assets/image/xylophone.png";
import harmonica2 from "../../../assets/image/harmonica2.png";
import piano from "../../../assets/image/piano-2.png";
import guitar from "../../../assets/image/guitar-2.png";
import theremin from "../../../assets/image/theremin.png";

const DEFAULT_ITEMS = [
	{ name: "ساز افکتی", slug: "effect", icons: pennFlute, id: 1 },
	{ name: "ساز بادی", slug: "windy", icons: bassoon, id: 2 },
	{ name: "ساز کوبه ای", slug: "kobe", icons: xylophone, id: 3 },
	{ name: "ساز دهنی", slug: "harmonica", icons: harmonica2, id: 4 },
	{ name: "ساز صفحه کلید دار", slug: "keyboardMaker", icons: piano, id: 5 },
	{ name: "ساز زهی", slug: "stringed", icons: guitar, id: 6 },
	{ name: "ساز الکترونیک", slug: "electronic", icons: theremin, id: 7 },
];
import { getDataCategory } from "../../../Data/Data.js";

function CategoryPage() {
	const { category } = useParams();
	const item = getDataCategory(category);
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);
	return (
		<>
			<div>
				<div className="toolbar" style={{ marginBottom: "20px" }} />
				<CategoryShopping />
				<Header title={item[0].name} icon={item[0].icons} id={item[0].id} />
				<ContentProduct category={false} />
			</div>
		</>
	);
}

export default CategoryPage;
