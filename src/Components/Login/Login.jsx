import React from "react";
import "./Login.css";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";

function Login({ type }) {
	const navigation = useNavigate();
	console.log(navigation);
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
					<form className="login-form">
						<div className="form-group">
							<input type="text" id="name" placeholder="نام" />
							<input type="text" id="name" placeholder="نام خانوادگی" />
						</div>
						<input type="text" id="name" placeholder="نام کاربری" />
						<input type="email" id="name" placeholder="ایمیل" />
						<button>عضویت</button>
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
					<form className="login-form">
						<input type="text" id="name" placeholder="نام کاربری" />
						<input type="email" id="name" placeholder="ایمیل" />
						<button>ورود</button>
					</form>
					<Link to="/sing-up">عضویت</Link>
				</div>
			</>
		);
	return (
		<div className="login-content-other">
			<div className="login-content-inner">{setForm}</div>
		</div>
	);
}

export default Login;
Login.protoTypes = {
	type: "up" || "in",
};
