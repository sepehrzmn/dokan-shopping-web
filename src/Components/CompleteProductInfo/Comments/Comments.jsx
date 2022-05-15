import React from "react";
import { getNumberNextPoint } from "../../../Data/Data";
import Comment from "./Comment";
const DATA_BASE = {
	score: {
		number: "4.50",
		attributes: [
			{ caption: "قدرت صدا", number: "4.0", id: 1 },
			{ caption: "کیفیت سیم ها", number: "1.0", id: 2 },
			{ caption: "قدرت صدا", number: "3.0", id: 3 },
			{ caption: "طراحی و زیبایی", number: "1.0", id: 4 },
			{ caption: "ارزش خرید", number: "2.0", id: 5 },
		],
	},
};

function Comments() {
	const starRating = (
		<div>
			{Array(5)
				.fill("")
				.map((item, index) => {
					const numberScore = Math.floor(DATA_BASE.score.number);
					console.log(numberScore);
					if (index + 1 <= numberScore) {
						return (
							<span
								key={index + 1}
								style={{
									backgroundImage:
										"linear-gradient(to left,#f3d203 100% ,#939393 0%)",
								}}
							>
								&#9733;
							</span>
						);
					} else if (index + 1 === numberScore + 1) {
						return (
							<span
								key={index + 1}
								style={{
									backgroundImage: `linear-gradient(to left,#f3d203 ${getNumberNextPoint(
										DATA_BASE.score.number.toString()
									)}% ,#939393 50% )`,
								}}
							>
								&#9733;
							</span>
						);
					} else {
						<span
							key={index + 1}
							style={{
								backgroundImage: `linear-gradient(to left,#f3d203  0% ,#939393 100%)`,
							}}
						>
							&#9733;
						</span>;
					}
				})}
		</div>
	);
	return (
		<div className="cpi-comments">
			<h3 className="title">دیدگاه</h3>
			<div className="comment-content">
				<div className="score">
					<div className="score-content-top">
						<div className="score-number">
							<span>{DATA_BASE.score.number}</span>
							<span>از 5.5</span>
						</div>
						{starRating}
					</div>
					<div className="percent-rating">
						{DATA_BASE.score.attributes.map((item, index) => {
							return (
								<div key={index}>
									<h4>{item.caption}</h4>
									<div className="base-bar" data-percent-product={`50%`}>
										<div
											style={{ width: item.number * 20 + "%" }}
											className="percent-bar"
										/>
									</div>
									<span>{item.number}</span>
								</div>
							);
						})}
					</div>
				</div>
				<div className="cpi-comment">
					<Comment />
					<Comment />
				</div>
			</div>
		</div>
	);
}

export default Comments;
