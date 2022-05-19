import React from "react";
import { Icon } from "@iconify/react";
import "./Profile.css";
export default function Profile() {
	return (
		<div className="profile">
			<div className="profile-avatar">
				{/* <img src="/static/" alt="" /> */}
				<Icon icon="ooui:user-avatar-outline" fontSize={80} />
				<Icon icon="bx:camera" />
			</div>
			<form className="login-form">
				<div className="form-group">
					<input type="text" placeholder="نام" />
					<input type="text" placeholder="نام خانوادگی" />
				</div>
				<input type="text" placeholder="نام کاربری" />
				<input type="text" placeholder="ایمیل" />
				<button type="submit">ثبت</button>
			</form>
		</div>
	);
}
