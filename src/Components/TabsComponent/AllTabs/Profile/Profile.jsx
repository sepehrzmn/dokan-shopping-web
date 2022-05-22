import React from "react";
import { Icon } from "@iconify/react";
import "./Profile.css";
import { useUser } from "../../../../contexts/user";
import { useState } from "react";
import { useEffect } from "react";
export default function Profile() {
	const { userInfo } = useUser();
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");

	useEffect(() => {
		if (userInfo.length) {
			setName(userInfo[0].name);
			setLastName(userInfo[0].lastName);
			setUserName(userInfo[0].userName);
			setEmail(userInfo[0].email);
		}
	}, [userInfo]);

	return (
		<div className="profile">
			<div className="profile-avatar">
				{/* <img src="/static/" alt="" /> */}
				<Icon icon="ooui:user-avatar-outline" fontSize={80} />
				<Icon icon="bx:camera" />
			</div>
			{userInfo.length && (
				<>
					<form className="login-form">
						<div className="form-group">
							<input type="text" placeholder="نام" value={name} />
							<input type="text" placeholder="نام خانوادگی" value={lastName} />
						</div>
						<input type="text" placeholder="نام کاربری" value={userName} />
						<input type="text" placeholder="ایمیل" value={email} />
						<button type="submit">ثبت</button>
					</form>
				</>
			)}
		</div>
	);
}
