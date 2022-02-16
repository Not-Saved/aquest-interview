import "../styles/globals.css";
import Layout from "components/Layout";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import ArtList from "components/ArtList";
import ModeSwitch from "components/ModeSwitch";
import PageWrapper from "components/PageWrapper";

function MyApp({ Component, pageProps, router }) {
	return (
		<>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto:wght@100&display=swap"
					rel="stylesheet"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout route={router.route}>
				<PageWrapper>
					<AnimatePresence initial={false} exitBeforeEnter>
						<Component key={router.route} route={router.route} {...pageProps} />
					</AnimatePresence>
				</PageWrapper>

				<ArtList route={router.route} router={router} />
			</Layout>
			<AnimatePresence initial={false}>
				{(router.route === "/" || router.route === "/slider") && (
					<ModeSwitch key="modeSwitch" route={router.route} router={router} />
				)}
			</AnimatePresence>
		</>
	);
}

export default MyApp;
