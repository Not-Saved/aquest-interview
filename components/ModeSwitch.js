import CompactSvg from "./CompactSvg";
import SliderSvg from "./SliderSvg";
import styles from "./modeSwitch.module.css";
import { useState } from "react";

export default function ModeSwitch({ mode }) {
	const [checked, setChecked] = useState(false);

	function handleClick() {
		setChecked((prev) => !prev);
	}

	return (
		<div className={styles.modeSwitchContainer}>
			<label htmlFor="modeSwitch" className="visuallyHidden">
				Mode switch
			</label>
			<button onClick={handleClick} aria-checked={checked} className={styles.button} role="switch" id="modeSwitch">
				<span className="visuallyHidden">Compact</span>
				<CompactSvg checked={checked} aria-hidden="true" />
				<span className="visuallyHidden">Slider</span>
				<SliderSvg checked={!checked} aria-hidden="true" />
			</button>
		</div>
	);
}
