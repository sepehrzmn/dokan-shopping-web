import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Navigation, Thumbs, FreeMode } from "swiper";
import image1 from "../../assets/image/product/1.png";
import image2 from "../../assets/image/product/2.png";
import image3 from "../../assets/image/product/3.png";
import image4 from "../../assets/image/product/4.png";
import "./ProductSlider.css";

function ProductSlider() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const images = [
		{ img: image1, id: 1, alt: "violin" },
		{ img: image2, id: 2, alt: "violin" },
		{ img: image3, id: 3, alt: "violin" },
		{ img: image4, id: 4, alt: "violin" },
	];

	return (
		<div className="slide-product">
			<Swiper
				thumbs={{ swiper: thumbsSwiper }}
				modules={[Navigation, FreeMode, Thumbs]}
				slidesPerView={1}
				spaceBetween={40}
				navigation={true}
				style={{ width: "100%" }}
			>
				{images.map(({ img, id, alt }) => {
					return (
						<SwiperSlide
							key={id}
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<img
								src={img}
								alt={alt}
								style={{
									maxWidth: "400px",
								}}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
			<Swiper
				style={{ width: "100%" }}
				onSwiper={setThumbsSwiper}
				slidesPerView={4}
				spaceBetween={10}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Thumbs]}
				breakpoints={{
					// when window width is >= 640px
					360: {
						slidesPerView: 3,
					},
					// when window width is >= 768px
					768: {
						slidesPerView: 4,
					},
				}}
			>
				{images.map(({ img, id, alt }) => {
					return (
						<SwiperSlide key={id}>
							<img
								src={img}
								style={{ maxWidth: "100px", minWidth: "70px" }}
								alt={alt}
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}

export default ProductSlider;
