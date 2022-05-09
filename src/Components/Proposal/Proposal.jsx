import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Items from "./Items/Items";
import "./Proposal.css";
import { Icon } from "@iconify/react";
function Proposal() {
	return (
		<div className="proposal">
			<Swiper slidesPerView={5} spaceBetween={50}>
				<SwiperSlide>
					<div className="SPR-title">
						<Icon icon="bxs:hot" fontSize={70} />
						فروش ویژه
					</div>
				</SwiperSlide>
				{Array(16)
					.fill("")
					.map((item, index) => {
						return (
							<SwiperSlide key={index + 1}>
								<Items />
							</SwiperSlide>
						);
					})}
			</Swiper>
		</div>
	);
}

export default Proposal;
