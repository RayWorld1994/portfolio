import { createFileRoute } from "@tanstack/react-router";
import Timeline from "../features/about/Timeline";
import ContactForm from "../features/contact/ContactForm";
import ExperienceNodes from "../features/experience/ExperienceNodes";
import Hero from "../features/hero/Hero";
import ProjectCards from "../features/projects/ProjectCards";
import SkillsGraph from "../features/skills/SkillsGraph";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
	return (
		<main>
			<Hero />
			<Timeline />
			<SkillsGraph />
			<ProjectCards />
			<ExperienceNodes />
			<ContactForm />
		</main>
	);
}
