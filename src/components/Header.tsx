import { Link } from "@tanstack/react-router";
import { openTerminalOverlay } from "../features/shell/EasterEggs";
import ThemeToggle from "./ThemeToggle";

const anchors = [
	{ href: "/#about", label: "About" },
	{ href: "/#skills", label: "Skills" },
	{ href: "/#projects", label: "Projects" },
	{ href: "/#experience", label: "Experience" },
	{ href: "/#contact", label: "Contact" },
] as const;

export default function Header() {
	return (
		<header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--header-bg)] px-4 backdrop-blur-lg">
			<nav className="page-wrap flex flex-wrap items-center gap-x-3 gap-y-2 py-3 sm:py-4">
				<h2 className="m-0 flex-shrink-0 text-base font-semibold tracking-tight">
					<Link
						to="/"
						className="inline-flex items-center gap-2 rounded-full border border-[var(--chip-line)] bg-[var(--chip-bg)] px-3 py-1.5 text-sm text-[var(--text)] no-underline sm:px-4 sm:py-2"
						onDoubleClick={(event) => {
							event.preventDefault();
							openTerminalOverlay();
						}}
						aria-label="Erick García — The Network. Double-click for terminal."
					>
						<span className="h-2 w-2 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--glow)]" />
						Erick García
					</Link>
				</h2>

				<div className="order-3 flex w-full flex-wrap items-center gap-x-4 gap-y-1 pb-1 sm:order-none sm:w-auto sm:flex-nowrap sm:pb-0">
					{anchors.map((item) => (
						<a key={item.href} href={item.href} className="nav-link">
							{item.label}
						</a>
					))}
				</div>

				<div className="ml-auto flex items-center gap-1.5 sm:gap-2">
					<ThemeToggle />
				</div>
			</nav>
		</header>
	);
}
