import Link from "next/link";
import AquestSvg from "./svg/AquestSvg";

export default function Logo() {
	return (
		<Link href="/">
			<a>
				<h1>
					<span className="visuallyHidden">AQ</span>
					<AquestSvg />
				</h1>
			</a>
		</Link>
	);
}
