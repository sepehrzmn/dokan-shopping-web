import React from "react";
import { Icon } from "@iconify/react";
import "./Profile.css";
import { useUser } from "../../../../contexts/user";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
export default function Profile() {
	const { userInfo } = useUser();
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [E_name, setE_Name] = useState("");
	const [E_lastName, setE_lastName] = useState("");
	const [E_userName, setE_UserName] = useState("");
	const [E_email, setE_Email] = useState("");
	const [usersAPI, setUserAPI] = useState("");
	const [success, setSuccess] = useState("");
	const navigation = useNavigate();
	const variants = {
		initial: {
			opacity: 0,
		},
		show: {
			opacity: 1,
		},
	};

	useEffect(() => {
		fetch("http://localhost:3001/users")
			.then((response) => response.json())
			.then((data) => {
				setUserAPI(data);
			});
	}, [name, lastName, userName, email]);

	useEffect(() => {
		if (userInfo.length) {
			setName(userInfo[0].name);
			setLastName(userInfo[0].lastName);
			setUserName(userInfo[0].userName);
			setEmail(userInfo[0].email);
		}
	}, [userInfo]);
	useEffect(() => {
		const timeOut = setTimeout(() => {
			setE_Name("");
		}, 3000);
		return () => clearTimeout(timeOut);
	}, [E_name]);
	useEffect(() => {
		const timeOut = setTimeout(() => {
			setE_lastName("");
		}, 3000);
		return () => clearTimeout(timeOut);
	}, [E_lastName]);
	useEffect(() => {
		const timeOut = setTimeout(() => {
			setE_UserName("");
		}, 3000);
		return () => clearTimeout(timeOut);
	}, [E_userName]);
	useEffect(() => {
		const timeOut = setTimeout(() => {
			setE_Email("");
		}, 3000);
		return () => clearTimeout(timeOut);
	}, [email]);
	useEffect(() => {
		const timeOut = setTimeout(() => {
			setSuccess("");
		}, 3000);
		return () => clearTimeout(timeOut);
	}, [success]);

	function onSubmit(event) {
		event.preventDefault();
		if (!userInfo.length) {
			navigation("/");
			return;
		}
		if (name.length && lastName.length && userName.length && email.length) {
			const userID = userInfo[0].userID;
			const filterUsers = usersAPI.users.filter((user) => {
				return user.userID !== userID;
			});
			const newInfoUsers = {
				users: [
					...filterUsers,
					{
						userID,
						name,
						lastName,
						userName,
						email,
					},
				],
			};
			fetch("http://localhost:3001/users", {
				method: "POST",
				headers: {
					"Content-Type": "application/json; charset=utf-8",
				},
				body: JSON.stringify(newInfoUsers),
				cache: "default",
			}).then(() => {
				setSuccess("با موفقیت ثبت شد");
				window.location = "/dashboard";
			});
		} else {
			name.length ? setE_Name("") : setE_Name("نام خود را وارد کنید");
			lastName.length
				? setE_lastName("")
				: setE_lastName("نام خانوادگی خود را وارد کنید");
			userName.length
				? setE_Email("")
				: setE_Email("نام کاربری خود را وارد کنید");
			email.length
				? setE_UserName("")
				: setE_UserName(" ایمیل خود راوارد کنید");
		}
	}

	return (
		<div className="profile">
			<div className="profile-avatar">
				{/* <img src="/static/" alt="" /> */}
				<Icon icon="ooui:user-avatar-outline" fontSize={80} />
				<Icon icon="bx:camera" />
			</div>
			{userInfo.length && (
				<>
					<form className="login-form" onSubmit={onSubmit}>
						<div className="form-group">
							<input
								type="text"
								placeholder="نام"
								value={name}
								onChange={(e) => {
									const value = e.target.value;
									const rex = /[0-9]/g;
									const result = value.match(rex);
									if (value.length > 10) {
										return;
									} else if (result != null) {
										return;
									} else {
										setName(value);
									}
								}}
							/>
							<input
								type="text"
								placeholder="نام خانوادگی"
								value={lastName}
								onChange={(e) => {
									const value = e.target.value;
									const rex = /[0-9]/g;
									const result = value.match(rex);
									if (value.length > 10) {
										return;
									} else if (result != null) {
										return;
									} else {
										setLastName(value);
									}
								}}
							/>
						</div>
						<input
							type="text"
							placeholder="نام کاربری"
							value={userName}
							onChange={(e) => {
								setUserName(e.target.value);
							}}
						/>
						<input
							type="text"
							placeholder="ایمیل"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
						<button type="submit">ثبت</button>
					</form>
				</>
			)}
			<div className="error-info">
				{E_name && (
					<motion.div
						animate="show"
						initial={"initial"}
						transition={{
							duration: 1.2,
						}}
						variants={variants}
						onClick={(e) => setE_Name("")}
					>
						{E_name}
					</motion.div>
				)}
				{E_lastName && (
					<motion.div
						animate="show"
						transition={{
							duration: 1.2,
						}}
						initial={"initial"}
						variants={variants}
						onClick={(e) => setE_lastName("")}
					>
						{E_lastName}
					</motion.div>
				)}
				{E_userName && (
					<motion.div
						transition={{
							duration: 1.2,
						}}
						animate="show"
						initial={"initial"}
						variants={variants}
						onClick={(e) => setE_UserName("")}
					>
						{E_userName}
					</motion.div>
				)}
				{E_email && (
					<motion.div
						transition={{
							duration: 1.2,
						}}
						animate="show"
						initial={"initial"}
						variants={variants}
						onClick={(e) => setE_Email("")}
					>
						{E_email}
					</motion.div>
				)}
				{success && (
					<motion.div
						transition={{
							duration: 1.2,
						}}
						animate="show"
						initial={"initial"}
						variants={variants}
						onClick={(e) => setSuccess("")}
						style={{
							background: "#03b228",
						}}
					>
						{success}
					</motion.div>
				)}
			</div>
		</div>
	);
}
