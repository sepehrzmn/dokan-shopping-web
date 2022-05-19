import { createContext, useContext, useEffect, useState } from "react";

const Home = createContext({});

export function useHomeItems() {
	return useContext(Home);
}

export function HomeProvider({ children }) {
	const [homeItems, setHomeItems] = useState(null);

	function getData() {
		fetch("http://localhost:3001/HomeItems")
			.then((res) => {
				res
					.json()
					.then((data) => {
						setHomeItems(data);
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
	return <Home.Provider value={homeItems}>{children}</Home.Provider>;
}
