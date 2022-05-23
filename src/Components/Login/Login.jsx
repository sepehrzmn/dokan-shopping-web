import React, { useState } from "react";
import "./Login.css";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";
import { useEffect } from "react";
function Login({ type, setId }) {
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [E_name, setE_name] = useState("");
	const [E_LastName, setE_LastName] = useState("");
	const [E_useName, setE_useName] = useState("");
	const [E_Email, setE_Email] = useState("");
	const navigation = useNavigate();
	const [users, setUsers] = useState({});

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
				setUsers(data);
			});
	}, [name, lastName, userName, email]);
	useEffect(() => {
		const timeOut = setTimeout(() => {
			setE_name("");
		}, 3000);
		return () => clearTimeout(timeOut);
	}, [E_name]);
	useEffect(() => {
		const timeOut = setTimeout(() => {
			setE_LastName("");
		}, 3000);
		return () => clearTimeout(timeOut);
	}, [E_LastName]);
	useEffect(() => {
		const timeOut = setTimeout(() => {
			setE_useName("");
		}, 3000);
		return () => clearTimeout(timeOut);
	}, [E_useName]);
	useEffect(() => {
		const timeOut = setTimeout(() => {
			setE_Email("");
		}, 3000);
		return () => clearTimeout(timeOut);
	}, [E_Email]);

	function singUp(event) {
		event.preventDefault();

		if (name.length && lastName.length && userName.length && email.length) {
			const userID = uuidv4();
			const usersItems = {
				...users,
				users: [...users.users, { name, lastName, userName, email, userID }],
			};
			console.log(usersItems);
			const check = checkUsers(email, userName);
			console.log(0);
			if (check) {
				fetch("http://localhost:3001/users", {
					method: "POST",
					headers: {
						"Content-Type": "application/json; charset=utf-8",
					},
					body: JSON.stringify(usersItems),
					Cache: "default",
				}).then(() => {
					setId(userID);
					setName("");
					setLastName("");
					setUserName("");
					setEmail("");
					window.location = "/";
				});
			}
		} else {
			name.length ? setE_name("") : setE_name("نام خود را وارد کنید");
			lastName.length
				? setE_LastName("")
				: setE_LastName("نام خانوادگی خود را وارد کنید");
			userName.length
				? setE_Email("")
				: setE_Email("نام کاربری خود را وارد کنید");
			email.length ? setE_useName("") : setE_useName(" ایمیل خود راوارد کنید");
		}
	}

	function checkUsers(UEmail, UserName) {
		const checkedUserName = users.users.filter(
			(user) => UserName === user.userName
		);
		const checkedEmail = users.users.filter((user) => UEmail === user.email);

		if (checkedUserName.length && checkedEmail.length) {
			setE_name("این نام کاربری و ایمیل ثبت شده است");
		} else if (checkedUserName.length) {
			setE_useName("این نام کاربری قبلا ثبت شده است");
			return false;
		} else if (checkedEmail.length) {
			setE_Email("این ایمیل قبلا ثبت شده است");
			return false;
		} else {
			return true;
		}
	}
	function login(event) {
		event.preventDefault();
		if (userName.length && email.length) {
			const findUser = users.users.filter(
				(user) => userName === user.userName && user.email === email
			);
			if (findUser.length === 1) {
				setId(findUser[0].userID);
				window.location = "/";
			} else {
				setE_Email("اطلاعات رو درست وار کنید");
			}
		} else {
			userName.length
				? setE_Email("")
				: setE_Email("نام کاربری خود را وارد کنید");
			email.length ? setE_useName("") : setE_useName(" ایمیل خود راوارد کنید");
		}
	}
	const setForm =
		type === "up" ? (
			<>
				<div className="login-title">
					<h3>عضویت</h3>
					<div
						onClick={() => {
							navigation("/shopping");
						}}
					>
						<Icon icon="eva:arrow-back-outline" fontSize={20} />
					</div>
				</div>
				<div className="login-body">
					<form className="login-form" onSubmit={singUp}>
						<div className="form-group">
							<input
								type="text"
								id="name"
								placeholder="نام"
								value={name}
								max={10}
								onChange={(e) => {
									const value = e.target.value;
									const rex = /[0-9]/g;
									const result = value.match(rex);
									if (value.length > 10) {
										setE_name("نام نباید بیشتر از 10 کاکتر باشد");
									} else if (result != null) {
										setE_name("لطفا از عدد در نام خود استفاد نکنید");
									} else {
										setName(value);
									}
								}}
							/>
							<input
								type="text"
								id="name"
								placeholder="نام خانوادگی"
								value={lastName}
								onChange={(e) => {
									const value = e.target.value;
									const rex = /[0-9]/g;
									const result = value.match(rex);
									if (value.length > 10) {
										setE_LastName("نام خانوادگی نباید بیشتر 10 کارکتر باشد");
									} else if (result != null) {
										setE_LastName("در نام خانوادگی از اعداد استفاده نکیند");
									} else setLastName(value);
								}}
							/>
						</div>
						<input
							type="text"
							id="name"
							placeholder="نام کاربری"
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
						/>
						<input
							type="email"
							id="name"
							placeholder="ایمیل"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<button type="submit">عضویت</button>
					</form>

					<Link to="/sing-in">ورود</Link>
				</div>
			</>
		) : (
			<>
				<div className="login-title">
					<h3>ورود</h3>
					<div
						onClick={() => {
							navigation("/shopping");
						}}
					>
						<Icon icon="eva:arrow-back-outline" fontSize={20} />
					</div>
				</div>
				<div className="login-body" style={{ marginTop: "65px" }}>
					<form className="login-form" onSubmit={login}>
						<input
							type="text"
							id="name"
							placeholder="نام کاربری"
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
						/>
						<input
							type="email"
							id="name"
							placeholder="ایمیل"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<button type="submit">ورود</button>
					</form>
					<Link to="/sing-up">عضویت</Link>
				</div>
			</>
		);
	return (
		<div className="login-content-other">
			<div className="login-content-inner">{setForm}</div>
			<div className="error-info">
				{E_name && (
					<motion.div
						animate="show"
						initial={"initial"}
						transition={{
							duration: 1.2,
						}}
						variants={variants}
						onClick={(e) => setE_name("")}
					>
						{E_name}
					</motion.div>
				)}
				{E_LastName && (
					<motion.div
						animate="show"
						transition={{
							duration: 1.2,
						}}
						initial={"initial"}
						variants={variants}
						onClick={(e) => setE_LastName("")}
					>
						{E_LastName}
					</motion.div>
				)}
				{E_useName && (
					<motion.div
						transition={{
							duration: 1.2,
						}}
						animate="show"
						initial={"initial"}
						variants={variants}
						onClick={(e) => setE_useName("")}
					>
						{E_useName}
					</motion.div>
				)}
				{E_Email && (
					<motion.div
						transition={{
							duration: 1.2,
						}}
						animate="show"
						initial={"initial"}
						variants={variants}
						onClick={(e) => setE_Email("")}
					>
						{E_Email}
					</motion.div>
				)}
			</div>
		</div>
	);
}

export default Login;
Login.protoTypes = {
	type: "up" || "in",
};
