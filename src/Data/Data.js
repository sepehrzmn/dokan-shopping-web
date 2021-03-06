import pennFlute from "../assets/image/penny.png";
import bassoon from "../assets/image/bassoon.png";
import xylophone from "../assets/image/xylophone.png";
import harmonica2 from "../assets/image/harmonica2.png";
import piano from "../assets/image/piano-2.png";
import guitar from "../assets/image/guitar-2.png";
import theremin from "../assets/image/theremin.png";

const DEFAULT_ITEMS = [
	{ name: "ساز افکتی", slug: "effect", icons: pennFlute, id: 1 },
	{ name: "ساز بادی", slug: "windy", icons: bassoon, id: 2 },
	{ name: "ساز کوبه ای", slug: "kobe", icons: xylophone, id: 3 },
	{ name: "ساز دهنی", slug: "harmonica", icons: harmonica2, id: 4 },
	{ name: "ساز صفحه کلید دار", slug: "keyboardMaker", icons: piano, id: 5 },
	{ name: "ساز زهی", slug: "stringed", icons: guitar, id: 6 },
	{ name: "ساز الکترونیک", slug: "electronic", icons: theremin, id: 7 },
];

export function getDataCategory(slug) {
	return DEFAULT_ITEMS.filter((item) => item.slug === slug);
}
export function truncate(str, len) {
	return str.length > len ? str.substr(0, len - 1) + " ..." : str;
}
export function getNumberNextPoint(number) {
	const strNumber = number.toString();
	const rgx = /^[0-9]*.[0-9]*$/;
	const check = strNumber.match(rgx);
	if (check) {
		const arrayNumber = strNumber.split(".");
		if ((arrayNumber.length = 2)) {
			return arrayNumber[1];
		}
		return number;
	}
}
export function ConvertNumberToPersian(number) {
	const persian = {
		0: "۰",
		1: "۱",
		2: "۲",
		3: "۳",
		4: "۴",
		5: "۵",
		6: "۶",
		7: "۷",
		8: "۸",
		9: "۹",
	};
	let strPersian = "";
	const strNum = number.toString().split("");
	if (!Object.keys(persian).includes(strNum[0])) {
		return number;
	}
	for (let i = 0; i < strNum.length; i++) {
		if (strNum[i] === ",") continue;
		strNum[i] = persian[strNum[i]];
	}
	for (let i = 0; i < strNum.length; i++) {
		strPersian += strNum[i];
	}
	strPersian.repeat("");

	// console.log(number, strPersian);

	return strPersian ? strPersian : number;
}
