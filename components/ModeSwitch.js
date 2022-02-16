import CompactSvg from "./CompactSvg";
import SliderSvg from "./SliderSvg";
import styles from "./modeSwitch.module.css";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function ModeSwitch({ route, router }) {
	const checked = route === "/slider";

	function handleClick() {
		const query = route === "/slider" ? "" : "slider";
		router.push("/" + query, undefined, { shallow: true });
	}

	return (
		<motion.div
			className={styles.modeSwitchContainer}
			initial={false}
			exit={{ opacity: [1, 0], transition: { duration: 1 } }}
			animate={{ opacity: [0, 1] }}
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
