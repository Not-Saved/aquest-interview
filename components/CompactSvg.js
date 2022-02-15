import { motion } from "framer-motion";

const variants = {
	visible: { opacity: 1 },
	hidden: { opacity: 0.187 },
};

export default function CompactSvg({ checked, ...props }) {
	return (
		<motion.svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width="64"
			height="52"
			viewBox="0 0 64 52"
			animate={checked ? "visible" : "hidden"}
			transition={{ duration: 0.8 }}
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
			<g id="Component_20_1" data-name="Component 20 – 1" transform="translate(9 6)">
				<g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_13)">
					<motion.rect
						id="Rectangle_13-2"
						data-name="Rectangle 13"
						width="26"
						height="34"
						rx="13"
						transform="translate(29 6)"
						fill="#fff2d9"
					/>
				</g>
				<g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_14)">
					<motion.rect
						id="Rectangle_14-2"
						data-name="Rectangle 14"
						width="26"
						height="34"
						rx="13"
						transform="translate(19 6)"
						fill="#fff2d9"
					/>
				</g>
				<g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Rectangle_15)">
					<motion.rect
						id="Rectangle_15-2"
						data-name="Rectangle 15"
						width="26"
						height="34"
						rx="13"
						transform="translate(9 6)"
						fill="#fff2d9"
					/>
				</g>
			</g>
		</motion.svg>
	);
}
