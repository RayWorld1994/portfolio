import { experiences } from "./experience-data";

function ExperienceCard({
	role,
	company,
	period,
	location,
	projects,
	technologies,
	achievements,
	featured = false,
}: {
	role: string;
	company: string;
	period: string;
	location: string;
	projects: string[];
	technologies: string[];
	achievements: string[];
	featured?: boolean;
}) {
	return (
		<article
			className={
				featured ? "experience-card experience-card--featured" : "experience-card"
			}
		>
			<header className="experience-card__header">
				<p className="experience-card__period">{period}</p>
				<h3 className="experience-card__role display-title">{role}</h3>
				<p className="experience-card__meta">
					<span>{company}</span>
					<span aria-hidden="true">·</span>
					<span>{location}</span>
				</p>
			</header>

			<div className="experience-card__body">
				<section className="experience-card__section">
					<h4 className="experience-card__label">Projects</h4>
					<ul className="experience-list">
						{projects.map((project) => (
							<li key={project}>{project}</li>
						))}
					</ul>
				</section>

				<section className="experience-card__section">
					<h4 className="experience-card__label">Achievements</h4>
					<ul className="experience-list">
						{achievements.map((achievement) => (
							<li key={achievement}>{achievement}</li>
						))}
					</ul>
				</section>

				<section className="experience-card__section experience-card__section--tech">
					<h4 className="experience-card__label">Technologies</h4>
					<ul className="experience-tech">
						{technologies.map((tech) => (
							<li key={tech}>{tech}</li>
						))}
					</ul>
				</section>
			</div>
		</article>
	);
}

export default function ExperienceNodes() {
	return (
		<section id="experience" className="experience-section page-wrap px-4 py-24">
			<div className="experience-section__header">
				<p className="section-kicker mb-3">Experience</p>
				<h2 className="display-title m-0 text-3xl font-bold text-[var(--text)] sm:text-4xl">
					Where I&apos;ve shipped
				</h2>
				<p className="mt-3 max-w-2xl text-[var(--text-muted)]">
					Enterprise frontend roles at Applaudo Studios — from Angular
					fundamentals to large-scale platforms used by professional sports
					organizations.
				</p>
			</div>

			<ol className="experience-timeline">
				{experiences.map((item, index) => (
					<li key={item.id} className="experience-timeline__item">
						<span className="experience-timeline__dot" aria-hidden="true" />
						<ExperienceCard
							role={item.role}
							company={item.company}
							period={item.period}
							location={item.location}
							projects={item.projects}
							technologies={item.technologies}
							achievements={item.achievements}
							featured={index === 0}
						/>
					</li>
				))}
			</ol>
		</section>
	);
}
