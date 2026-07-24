import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently in view (below the sticky header).
 */
export function useActiveSection(
	sectionIds: readonly string[],
	headerOffset = 88,
) {
	const [activeId, setActiveId] = useState<string | null>(null);

	useEffect(() => {
		const resolveActive = () => {
			let current: string | null = null;

			for (const id of sectionIds) {
				const element = document.getElementById(id);
				if (!element) continue;

				if (element.getBoundingClientRect().top <= headerOffset) {
					current = id;
				}
			}

			setActiveId(current);
		};

		resolveActive();
		window.addEventListener("scroll", resolveActive, { passive: true });
		window.addEventListener("resize", resolveActive, { passive: true });

		return () => {
			window.removeEventListener("scroll", resolveActive);
			window.removeEventListener("resize", resolveActive);
		};
	}, [sectionIds, headerOffset]);

	return activeId;
}
