import React from "react";
import "./comments.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import Comment from "./Comment/Comment";
import { useEffect } from "react";
import { useState } from "react";
import { useHomeItems } from "../../../contexts/home";

function Comments() {
	const [comments, setComments] = useState(null);
	const items = useHomeItems();
	useEffect(() => {
		setComments(items);
	}, [items]);

	return (
		<>
			{!comments ? (
				""
			) : (
				<>
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
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
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
							{comments.comments.map(({ userName, avatar, id, text }) => {
								return (
									<SwiperSlide style={{ height: "max-content" }} key={id}>
										<Comment name={userName} avatar={avatar} text={text} />
									</SwiperSlide>
								);
							})}
						</Swiper>
					</div>
				</>
			)}
		</>
	);
}

export default Comments;
