import React from "react";
import "./comments.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import Comment from "./Comment/Comment";

function Comments() {
	console.log(window.innerWidth);
	return (
		<div className="comments">
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={"auto"}
				style={{
					height: "max-content",
					width: window.screen.width > 800 ? "40%" : "90%",
					overflow: "visible",
				}}
				coverflowEffect={{
					rotate: 50,
					stretch: 10,
					depth: 50,
					modifier: 1,
					slideShadows: false,
				}}
				modules={[EffectCoverflow]}
				className="mySwiper"
			>
				{Array(16)
					.fill("")
					.map(() => {
						return (
							<SwiperSlide style={{ height: "max-content" }}>
								<Comment />
							</SwiperSlide>
						);
					})}
				<SwiperSlide style={{ height: "max-content" }}>
					<div className="comment">
						<div className="c-title">
							<img
								src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=80&q=80"
								alt="user"
							/>
							<h4>سپهر</h4>
						</div>
						<div className="c-body">
							<p>
								لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
								استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
								در ستون و سطرآنچنان که لازم است، و برای
							</p>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default Comments;
