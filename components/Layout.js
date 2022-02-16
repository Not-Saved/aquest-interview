import Header from "./Header";
import styles from "./layout.module.css";

export default function Layout({ children, route }) {
	return (
		<div className={styles.content}>
			<Header />
			<main className={styles.main}>{children}</main>
		</div>
	);
}
