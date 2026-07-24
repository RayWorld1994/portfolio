import { createFileRoute } from "@tanstack/react-router";
import Timeline from "../features/about/Timeline";
import ContactForm from "../features/contact/ContactForm";
import ExperienceNodes from "../features/experience/ExperienceNodes";
import Hero from "../features/hero/Hero";
import ProjectCards from "../features/projects/ProjectCards";
import SkillsPanel from "../features/skills/SkillsPanel";

export const Route = createFileRoute("/")({ component: HomePage });

function HomePage() {
	return (
		<main>
			<Hero />
			<Timeline />
			<SkillsPanel />
			<ProjectCards />
			<ExperienceNodes />
			<ContactForm />
		</main>
	);
}
