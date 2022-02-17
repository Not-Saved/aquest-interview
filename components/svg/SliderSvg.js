import { motion } from "framer-motion";

import { modeSwitchVariants } from "util/variants";

export default function SliderSvg({ checked, ...props }) {
	return (
		<motion.svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width="46"
			height="42"
			viewBox="0 0 54 42"
			animate={checked ? "visible" : "hidden"}
			variants={modeSwitchVariants}
			{...props}
		>
			<defs>
				<filter id="Rectangle_16" x="0" y="0" width="29" height="52" filterUnits="userSpaceOnUse">
					<feOffset dy="3" input="SourceAlpha" />
					<feGaussianBlur stdDeviation="3" result="blur" />
					<feFlood floodOpacity="0.161" />
					<feComposite operator="in" in2="blur" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter id="Rectangle_17" x="13" y="0" width="29" height="52" filterUnits="userSpaceOnUse">
					<feOffset dy="3" input="SourceAlpha" />
					<feGaussianBlur stdDeviation="3" result="blur-2" />
					<feFlood floodOpacity="0.161" />
					<feComposite operator="in" in2="blur-2" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter id="Rectangle_18" x="26" y="0" width="30" height="52" filterUnits="userSpaceOnUse">
					<feOffset dy="3" input="SourceAlpha" />
					<feGaussianBlur stdDeviation="3" result="blur-3" />
					<feFlood floodOpacity="0.161" />
					<feComposite operator="in" in2="blur-3" />
					<feComposite in="SourceGraphic" />
				</filter>
			</defs>
			<motion.g id="Group_1" data-name="Group 1" variants={modeSwitchVariants}>
				<g filter="url(#Rectangle_16)">
					<rect
						id="Rectangle_16-2"
						data-name="Rectangle 16"
						width="11"
						height="34"
						rx="5.5"
						transform="translate(7 3)"
						fill="#fff2d9"
					/>
				</g>
				<g filter="url(#Rectangle_17)">
					<rect
						id="Rectangle_17-2"
						data-name="Rectangle 17"
						width="11"
						height="34"
						rx="5.5"
						transform="translate(21 3)"
						fill="#fff2d9"
					/>
				</g>
				<g filter="url(#Rectangle_18)">
					<rect
						id="Rectangle_18-2"
						data-name="Rectangle 18"
						width="12"
						height="34"
						rx="6"
						transform="translate(34 3)"
						fill="#fff2d9"
					/>
				</g>
			</motion.g>
		</motion.svg>
	);
}
