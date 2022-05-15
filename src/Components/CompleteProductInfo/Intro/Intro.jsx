import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { truncate } from "../../../Data/Data";

const text =
	"این ساز در پس قرن‌ها تغییرات زیادی را به خود دیده و در هر نسل صداییرساتر در کنار ساز و کار نواختن ساده‌تری داشته است. امروزه می‌توان ادعاکرد در تمامی فرهنگ‌ها و سبک‌های موسیقی جهان‌، ویولن نقش پررنگی دارد.اکثر قریب به اتفاق گروه‌های ارکستر از ویولن به عنوان ساز اصلی خوداستفاده می‌کنند. حتی دیگر سازهای زهی گروه‌های ارکسترهم در خانواده ویولنقرار دارند. عدم وجود پرده‌ها یا فرت‌های جداگانه بر روی این ساز، انعطافزیادی به آن بخشیده است. برای مثال فرت‌های گیتار به فواصل نیم پرده‌ایتقسیم شده‌اند و گرفتن ربع پرده بر روی آن‌ها به مهارت بسیار زیادی نیازدارد. ولی ویولن چنین تقسیم‌بندی نداشته و میتوان تمامی فواصل را بر روی آناجرا کرد. ساز فاقد آرشه می باشد و به همراه هارد کیس ارسال می گردد.";
function Intro() {
	const [shorten, setShorten] = useState(false);

	return (
		<div id="intro" className="intro">
			<h3 className="title">معرفی</h3>
			<p>{!shorten ? truncate(text, 300) : text + text}</p>
			<button className="btn" onClick={() => setShorten(!shorten)}>
				<Icon icon="bi:arrow-return-left" />
				{shorten ? "بستن" : "بیشتر"}
			</button>
		</div>
	);
}

export default Intro;
