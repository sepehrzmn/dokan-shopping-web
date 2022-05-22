import React, { createContext, useContext, useEffect, useState } from "react";

const User = createContext({});

export function useUser() {
	return useContext(User);
}

export function UserProvider({ children, id }) {
	const [userInfo, setUserInfo] = useState([]);

	useEffect(() => {
		fetch("http://localhost:3001/users")
			.then((response) => {
				response.json().then((data) => {
					const findUser = data.users.filter((user) => user.userID === id);
					setUserInfo(findUser);
				});
			})
			.catch((error) => {
				console.error(error.message);
			});
	}, [id]);
	const value = { userInfo };
	return <User.Provider value={value}>{children}</User.Provider>;
}
