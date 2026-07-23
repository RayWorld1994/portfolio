export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="mt-24 border-t border-[var(--line)] px-4 pb-14 pt-10 text-[var(--text-muted)]">
			<div className="page-wrap flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
				<p className="m-0 text-sm">&copy; {year} Erick. All rights reserved.</p>
				<p className="section-kicker m-0">The Network</p>
			</div>
		</footer>
	);
}
