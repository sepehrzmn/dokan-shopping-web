import React from "react";
import "./comments.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import Comment from "../Comment/Comment";

function Comments() {
	return (
		<div className="comments">
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={"auto"}
				style={{
					height: "50%",
					width: "40%",
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
			</Swiper>
		</div>
	);
}

export default Comments;
