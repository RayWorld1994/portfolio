import {
	skillIconIsMono,
	skillIconUrl,
	skillPages,
	type Skill,
} from "./skills-data";

function SkillTile({ skill }: { skill: Skill }) {
	const monoIcon = skillIconIsMono(skill.iconSlug);

	return (
		<li className="skills-tile">
			<img
				src={skillIconUrl(skill.iconSlug)}
				alt=""
				width={44}
				height={44}
				className={
					monoIcon
						? "skills-tile__icon skills-tile__icon--mono"
						: "skills-tile__icon"
				}
				loading="lazy"
				decoding="async"
			/>
			<span className="skills-tile__label">{skill.label}</span>
		</li>
	);
}

export default function SkillsPanel() {
	return (
		<section id="skills" className="skills-section px-4 py-24">
			<div className="page-wrap skills-section__layout">
				<div className="skills-section__rail" aria-hidden="true">
					<span className="skills-section__rail-line" />
					<span className="skills-section__rail-label">Skills</span>
				</div>

				<div className="skills-panel">
					<h2 className="skills-panel__title display-title">What I do</h2>
					<p className="skills-panel__intro">
						Software Developer with 5 years of experience building scalable
						web applications. Strong production background in Angular,
						TypeScript, and responsive UI — plus practical React, Next.js,
						Node.js, and PostgreSQL full-stack work focused on clean
						architecture and maintainable delivery.
					</p>

					<div className="skills-panel__scroll">
						{skillPages.map((page) => (
							<div key={page.id} className="skills-panel__page">
								<ul className="skills-grid">
									{page.skills.map((skill) => (
										<SkillTile key={skill.id} skill={skill} />
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
