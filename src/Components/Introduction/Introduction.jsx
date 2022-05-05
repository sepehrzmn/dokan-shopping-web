import React from "react";
import "./Introduction.css";
import setar from "../../assets/image/setar.png";
import vector1 from "../../assets/image/Vector1.png";
import vector2 from "../../assets/image/Vector2.png";

function Introduction() {
	return (
		<div className="introduction">
			<div className="intro-right">
				<div className="persian-music">
					<span> زِ رَعدِ آسْمان بِشْنو تو آوازِ دُهُل یعنی</span>
					<span> عروسی دارد این عالَم که بُستان پُرجَهیز آمد یا می‌گوید:</span>
				</div>
				<div className="persian-music">
					<span> باغْبانا رَعدْ مُطرب ابرْ ساقی گشت و شُد</span>
					<span> باغْ مَست و راغْ مَست و غُنچه مَست و خارْ مَست</span>
				</div>
				<div>
					<span>حافظ</span>
				</div>
			</div>
			<div className="intro-left">
				<img src={setar} alt="setar" />
				<img src={vector1} alt="vector" />
				<img src={vector2} alt="vector" />
			</div>
		</div>
	);
}

export default Introduction;
