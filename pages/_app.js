import "../styles/globals.css";
import Layout from "components/Layout";
import Header from "components/Header";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto:wght@100&display=swap"
					rel="stylesheet"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<Header />
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
