import React from "react";
import "./comments.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

function Comments() {
	return (
		<div className="comments">
			<Swiper
				effect={"coverflow"}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={"auto"}
				style={{ height: "100%", width: "40%", overflow: "visible" }}
				coverflowEffect={{
					rotate: 10,
					stretch: 10,
					depth: 40,
					modifier: 1,
					slideShadows: true,
				}}
				pagination={true}
				modules={[EffectCoverflow, Pagination]}
				className="mySwiper"
			>
				{Array(16)
					.fill("")
					.map(() => {
						return (
							<SwiperSlide style={{ width: "100%" }}>
								{/* <Comment /> */}
							</SwiperSlide>
						);
					})}
			</Swiper>
		</div>
	);
}

export default Comments;
