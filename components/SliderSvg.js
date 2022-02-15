import { motion } from "framer-motion";

const variants = {
	visible: { opacity: 1 },
	hidden: { opacity: 0.187 },
};

export default function SliderSvg({ checked, ...props }) {
	return (
		<motion.svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width="56"
			height="52"
			viewBox="0 0 56 52"
			animate={checked ? "visible" : "hidden"}
			transition={{ duration: 1 }}
			variants={variants}
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
			<g id="Group_1" data-name="Group 1" transform="translate(-1658 -963)">
				<g transform="matrix(1, 0, 0, 1, 1658, 963)" filter="url(#Rectangle_16)">
					<motion.rect
						id="Rectangle_16-2"
						data-name="Rectangle 16"
						width="11"
						height="34"
						rx="5.5"
						transform="translate(9 6)"
						fill="#fff2d9"
						variants={variants}
					/>
				</g>
				<g transform="matrix(1, 0, 0, 1, 1658, 963)" filter="url(#Rectangle_17)">
					<motion.rect
						id="Rectangle_17-2"
						data-name="Rectangle 17"
						width="11"
						height="34"
						rx="5.5"
						transform="translate(22 6)"
						fill="#fff2d9"
						variants={variants}
					/>
				</g>
				<g transform="matrix(1, 0, 0, 1, 1658, 963)" filter="url(#Rectangle_18)">
					<motion.rect
						id="Rectangle_18-2"
						data-name="Rectangle 18"
						width="12"
						height="34"
						rx="6"
						transform="translate(35 6)"
						fill="#fff2d9"
						variants={variants}
					/>
				</g>
			</g>
		</motion.svg>
	);
}
