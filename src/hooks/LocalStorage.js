import React, { useEffect, useState } from "react";

const PREFIX_KEY = "dokan-shopping-";

export function useLocalStorage(key, initialState) {
	const keyItem = PREFIX_KEY + String(key);
	const [data, setData] = useState(() => {
		const jsonState = window.localStorage.getItem(keyItem);
		if (jsonState === "undefined") return;
		if (jsonState) return JSON.parse(jsonState);
		return initialState;
	});
	useEffect(() => {
		window.localStorage.setItem(keyItem, JSON.stringify(data));
	}, [keyItem, data]);

	return [data, setData];
}
