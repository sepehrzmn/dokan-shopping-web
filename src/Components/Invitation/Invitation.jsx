import React from "react";
import "./Invitation.css";
import arrowDown from "../../assets/image/arrowDown.png";
function Invitation() {
	return (
		<>
			<div className="invitation">
				<h2>با صدای دلنشین و زیبای موسیقی را با ما تجربه کنید</h2>
				<p>انواع الات موسیقی را بهترین کیفیت و ضمانت یک ساله از ما تهیه کنید</p>
				<div>
					<img src={arrowDown} alt="arrow down" />
					<button className="btn-product">محصولات</button>
					<button className="btn-invitation">همکاری با ما</button>
				</div>
			</div>
		</>
	);
}

export default Invitation;