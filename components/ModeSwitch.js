import { useRouter } from "next/router";
import { motion } from "framer-motion";

import CompactSvg from "./svg/CompactSvg";
import SliderSvg from "./svg/SliderSvg";

import styles from "./modeSwitch.module.css";

export default function ModeSwitch() {
	const router = useRouter();
	const checked = router.route === "/slider";

	function handleClick() {
		const query = router.route === "/slider" ? "/" : "/slider";
		router.push(query);
	}

	return (
		<motion.div
			key="switch"
			className={styles.modeSwitchContainer}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
			animate={{ opacity: [0, 1], transition: { duration: 0.7, ease: "easeInOut" } }}
		>
			<label htmlFor="modeSwitch" className="visuallyHidden">
				Mode switch
			</label>
			<button onClick={handleClick} aria-checked={!checked} className={styles.button} role="switch" id="modeSwitch">
				<div>
					<span className="visuallyHidden">Compact</span>
					<CompactSvg checked={!checked} aria-hidden="true" />
				</div>
				<div>
					<span className="visuallyHidden">Slider</span>
					<SliderSvg checked={checked} aria-hidden="true" />
				</div>
			</button>
		</motion.div>
	);
}
