import React from "react";
import "./Invitation.css";
import arrowDown from "../../assets/image/arrowDown.png";
import { Icon } from "@iconify/react";

function Invitation() {
	return (
		<>
			<div className="invitation">
				<h2> صدای دلنشین و زیبای موسیقی را با ما تجربه کنید</h2>
				<p>انواع الات موسیقی را بهترین کیفیت و ضمانت یک ساله از ما تهیه کنید</p>
				<div>
					<img src={arrowDown} alt="arrow down" />
					<button className="btn-product">محصولات</button>
					<button className="btn-invitation">همکاری با ما</button>
				</div>
				<Icon icon="el:music" color="#ffe50b" fontSize={50} />
				<Icon icon="el:music" color="#ffe50b" fontSize={50} />
				<Icon icon="clarity:music-note-solid" color="#ffe50b" fontSize={50} />
				<Icon icon="clarity:music-note-solid" color="#ffe50b" fontSize={50} />
			</div>
		</>
	);
}

export default Invitation;
