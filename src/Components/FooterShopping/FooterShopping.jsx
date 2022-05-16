import React from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link/dist/react-router-hash-link.cjs.production";
import Dokan from "../Dokan/Dokan";
import "./FooterShopping.css";

function FooterShopping() {
	return (
		<footer className="footer-shopping">
			<div className="footer-content">
				<ul className="footer-nav">
					<li>
						<NavLink to="/">خانه </NavLink>
					</li>
					<li>
						<NavHashLink to="#category" smooth>
							دسته بندی
						</NavHashLink>
					</li>
					<li>
						<NavHashLink to="#products" smooth>
							محصولات
						</NavHashLink>
					</li>
				</ul>
				<ul className="footer-address">
					<li>
						<span>تلفن :</span>
						<span>09924952176</span>
					</li>
					<li>
						<span>ایمیل :</span>
						<span>szamani3045@gmail.com</span>
					</li>
					<li>
						<span>آدرس :</span>
						<span>تهران میدان امام</span>
					</li>
				</ul>
				<section className="footer-about">
					<Dokan />
					<p>
						لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
						استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
						ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
						و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
						زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
						متخصصان را می طلبد، تا با
					</p>
				</section>
			</div>
		</footer>
	);
}

export default FooterShopping;
