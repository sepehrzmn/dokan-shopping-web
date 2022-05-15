import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";
let lastScroll = 0;

function Navbar() {
	const [scrollNav, setScrollNav] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	function handleScroll() {
		const newScroll = window.scrollY;
		if (newScroll > lastScroll) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
		lastScroll = newScroll;
	}
	return (
		<>
			<nav
				className="cp-info-navbar"
				style={{
					top: ` ${scrollNav ? "-100%" : "80px"} `,
				}}
			>
				<div className="cpi-content">
					<ul>
						<li>
							<HashLink smooth to={"#intro"}>
								معرفی
							</HashLink>
						</li>
						<li>
							<HashLink smooth to={"#specifications"}>
								مشخصات
							</HashLink>
						</li>
						<li>
							<HashLink smooth to={"#comment"}>
								دیدگاه
							</HashLink>
						</li>
						<li>
							<HashLink smooth to={"#question"}>
								پرسش ها
							</HashLink>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
