import { useEffect, useState } from "react";

const PREFIX_KEY = "dokan-shopping-";

export function useLocalStorage(key, initialState) {
	const keyItem = PREFIX_KEY + key;
	const [data, setData] = useState(() => {
		const json = window.localStorage.getItem(PREFIX_KEY);
		if (json) {
			return JSON.parse(json);
		} else {
			return initialState;
		}
	});

	useEffect(() => {
		window.localStorage.setItem(keyItem, JSON.stringify(data));
	}, [keyItem, data]);

	return [data, setData];
}
