import Link from "next/link";
import AquestSvg from "./svg/AquestSvg";

export default function Logo() {
	return (
		<Link href="/">
			<a>
				<h1>
					<span className="visuallyHidden">AQ</span>
					<AquestSvg aria-hidden="true" focusable="false" />
				</h1>
			</a>
		</Link>
	);
}
