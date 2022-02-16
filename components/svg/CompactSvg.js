import { motion } from "framer-motion";

const variants = {
	visible: { opacity: 1, transition: { duration: 0.7 } },
	hidden: { opacity: 0.397, transition: { duration: 0.7 } },
};

export default function CompactSvg({ checked, ...props }) {
	return (
		<motion.svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width="46"
			height="42"
			viewBox="0 0 54 42"
			animate={checked ? "visible" : "hidden"}
			variants={variants}
			{...props}
		>
			<defs>
				<filter id="Rectangle_13" x="20" y="0" width="44" height="52" filterUnits="userSpaceOnUse">
					<feOffset dy="3" input="SourceAlpha" />
					<feGaussianBlur stdDeviation="3" result="blur" />
					<feFlood floodColor="#666" />
					<feComposite operator="in" in2="blur" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter id="Rectangle_14" x="10" y="0" width="44" height="52" filterUnits="userSpaceOnUse">
					<feOffset dy="3" input="SourceAlpha" />
					<feGaussianBlur stdDeviation="3" result="blur-2" />
					<feFlood floodColor="#666" />
					<feComposite operator="in" in2="blur-2" />
					<feComposite in="SourceGraphic" />
				</filter>
				<filter id="Rectangle_15" x="0" y="0" width="44" height="52" filterUnits="userSpaceOnUse">
					<feOffset dy="3" input="SourceAlpha" />
					<feGaussianBlur stdDeviation="3" result="blur-3" />
					<feFlood floodColor="#666" />
					<feComposite operator="in" in2="blur-3" />
					<feComposite in="SourceGraphic" />
				</filter>
			</defs>
			<motion.g id="Component_20_1" data-name="Component 20 – 1" variants={variants}>
				<g filter="url(#Rectangle_13)">
					<rect
						id="Rectangle_13-2"
						data-name="Rectangle 13"
						width="26"
						height="34"
						rx="13"
						transform="translate(24 3)"
						fill="#fff2d9"
					/>
				</g>
				<g filter="url(#Rectangle_14)">
					<rect
						id="Rectangle_14-2"
						data-name="Rectangle 14"
						width="26"
						height="34"
						rx="13"
						transform="translate(14 3)"
						fill="#fff2d9"
					/>
				</g>
				<g filter="url(#Rectangle_15)">
					<rect
						id="Rectangle_15-2"
						data-name="Rectangle 15"
						width="26"
						height="34"
						rx="13"
						transform="translate(4 3)"
						fill="#fff2d9"
					/>
				</g>
			</motion.g>
		</motion.svg>
	);
}
