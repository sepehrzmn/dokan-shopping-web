import { Icon } from "@iconify/react";
import React from "react";
const DEFAULT_DATA = {
	cunt: 5,
	title: "خیلی خوب بود",
	time: {
		day: "۸ فروردین ۱۴۰۱",
	},
	role: "کاربر",
	buyer: true,
	text: "خیلی بداصن راضی نبودم شکسته برام اوردن ودرخواست مرجوعی ام روقبول نکردن",
	suggestion: {
		text: "خوب بود",
		consent: "up",
	},
	color: "black",
};
function Comment() {
	return (
		<div className="cpc-comment">
			<div className="title-cpc-comment">
				{DEFAULT_DATA.cunt < 3 ? (
					<span style={{ background: "#fa4e4e" }}>{DEFAULT_DATA.cunt}</span>
				) : DEFAULT_DATA.cunt < 5 ? (
					<span style={{ background: "#ffe035" }}>{DEFAULT_DATA.cunt}</span>
				) : (
					<span style={{ background: "#35b8ff" }}>{DEFAULT_DATA.cunt}</span>
				)}
				<h3>{DEFAULT_DATA.title}</h3>
			</div>
			<div className="comment-time">
				<span>{DEFAULT_DATA.time.day}</span>
				<span>{DEFAULT_DATA.role}</span>
				{DEFAULT_DATA.buyer ? <span>خریدار</span> : null}
			</div>
			{DEFAULT_DATA.suggestion.consent === "low" ? (
				<>
					<div className="suggestion" style={{ color: "#f13030" }}>
						<Icon icon="bx:like" rotate={2} fontSize={20} />
						<span>{DEFAULT_DATA.suggestion.text}</span>
					</div>
				</>
			) : DEFAULT_DATA.suggestion.consent === "middle" ? (
				<>
					<div className="suggestion" style={{ color: "#f0cc18" }}>
						<Icon icon="bx:like" fontSize={20} />
						<span>{DEFAULT_DATA.suggestion.text}</span>
					</div>
				</>
			) : (
				<div className="suggestion" style={{ color: "#1897f0" }}>
					<Icon icon="bx:like" fontSize={20} />
					<span>{DEFAULT_DATA.suggestion.text}</span>
				</div>
			)}

			<p>{DEFAULT_DATA.text}</p>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<div className="color">
					<div style={{ background: DEFAULT_DATA.color }} />
					مشکی
				</div>
				<div style={{ display: "flex", gap: "1rem" }}>
					<Icon
						icon="ant-design:like-filled"
						rotate={2}
						color="#bbbbbb"
						style={{ cursor: "pointer" }}
						fontSize={20}
					/>
					<Icon
						icon="ant-design:like-filled"
						color="#bbbbbb"
						style={{ cursor: "pointer" }}
						fontSize={20}
					/>
				</div>
			</div>
		</div>
	);
}

export default Comment;
