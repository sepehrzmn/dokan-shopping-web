import React from "react";
import "./Possibilities.css";
import concert from "../../assets/image/concert.png";
import tutorial from "../../assets/image/tutorial.png";

function Possibilities() {
	return (
		<div className="possibilities">
			<div className="p-tutorial">
				<div style={{ background: `url(${tutorial})` }} />
				<button className="PT-btn">
					<p>آموزش موسیقی</p>
				</button>
			</div>
			<div className="p-concert">
				<div style={{ background: `url(${concert})` }} />
				<button className="PC-btn">
					<p>کنسرت</p>
				</button>
			</div>
		</div>
	);
}

export default Possibilities;
