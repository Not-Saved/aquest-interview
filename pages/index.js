import ModeSwitch from "components/ModeSwitch";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>The Abstract Design</title>
				<meta name="description" content="An assignment for a job interview" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<div className={styles.description}>
					<h2>The Abstract design</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</p>
				</div>
				<div className={styles.images}>
					<ul>{/* Immagini */}</ul>
				</div>
				<ModeSwitch />
			</main>
		</>
	);
}
