import { createContext, useContext, useEffect, useState } from "react";

const Category = createContext({});

export function useCategory() {
	return useContext(Category);
}

export function CategoryProvider({ children }) {
	const [categoryItems, setCategoryItems] = useState(null);

	function getData() {
		fetch("http://localhost:3001/CategoryPage")
			.then((res) => {
				res
					.json()
					.then((data) => {
						setCategoryItems(data);
					})
					.catch((er) => {
						console.error(er);
					});
			})
			.catch((er) => {
				console.error(er);
			});
	}
	useEffect(() => {
		getData();
	}, []);
	return (
		<Category.Provider value={categoryItems}>{children}</Category.Provider>
	);
}
