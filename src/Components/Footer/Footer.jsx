import React from "react";
import Dokan from "../Dokan/Dokan";
import "./Footer.css";

function Footer() {
	return (
		<footer>
			<ul className="f-menu">
				<li>صفحه اصلی</li>
				<li>دسته بندی</li>
				<li>محصولات</li>
			</ul>

			<ul className="f-contact">
				<li>تلفن: 09924952176 </li>
				<li>ایمیل: szamani3045@gmail.com </li>
				<li>ادرس: تهران میدان امام </li>
			</ul>

			<div className="f-info">
				<div className="f-logo">
					<Dokan />
				</div>
				لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
				از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
				سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
				متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
				درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
			</div>
		</footer>
	);
}

export default Footer;
