import styles from "./pageWrapper.module.css";

export default function PageWrapper({ children }) {
	return <div className={styles.wrapper}>{children}</div>;
}
