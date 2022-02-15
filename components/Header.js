import styles from "./header.module.css";
import Logo from "./Logo";

export default function Header() {
	return (
		<header className={styles.header}>
			<Logo />
		</header>
	);
}
