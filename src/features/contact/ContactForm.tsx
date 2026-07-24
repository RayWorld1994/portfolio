import { useState } from "react";
import { contactSchema, submitContact } from "./contact.functions";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const contactLinks = [
	{ href: "mailto:erykede@gmail.com", label: "erykede@gmail.com" },
	{ href: "tel:+50371589212", label: "+503 7158 9212" },
] as const;

export default function ContactForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [errors, setErrors] = useState<FieldErrors>({});
	const [status, setStatus] = useState<
		"idle" | "submitting" | "success" | "error"
	>("idle");
	const [statusMessage, setStatusMessage] = useState("");

	async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setStatus("submitting");
		setErrors({});
		setStatusMessage("");

		const parsed = contactSchema.safeParse({ name, email, message });
		if (!parsed.success) {
			const next: FieldErrors = {};
			for (const issue of parsed.error.issues) {
				const key = issue.path[0];
				if (key === "name" || key === "email" || key === "message") {
					next[key] = issue.message;
				}
			}
			setErrors(next);
			setStatus("error");
			setStatusMessage("Please fix the highlighted fields.");
			return;
		}

		try {
			const result = await submitContact({ data: parsed.data });
			setStatus("success");
			setStatusMessage(result.message);
			setName("");
			setEmail("");
			setMessage("");
		} catch {
			setStatus("error");
			setStatusMessage("Something went wrong. Please try again.");
		}
	}

	return (
		<section id="contact" className="contact-section page-wrap px-4 py-24 pb-32">
			<div className="contact-section__layout">
				<div className="contact-section__intro">
					<p className="section-kicker mb-3">Contact</p>
					<h2 className="display-title m-0 text-3xl font-bold text-[var(--text)] sm:text-4xl">
						Let&apos;s connect a new node
					</h2>
					<p className="contact-section__copy">
						Open to roles and collaborations. Based in San Salvador, El
						Salvador — Spanish (native), English (B2 / C1 reading & writing).
					</p>

					<ul className="contact-links">
						{contactLinks.map((link) => (
							<li key={link.href}>
								<a href={link.href} className="contact-links__item">
									{link.label}
								</a>
							</li>
						))}
					</ul>
				</div>

				<form
					onSubmit={onSubmit}
					className={
						status === "success"
							? "contact-form contact-form--success"
							: "contact-form"
					}
					noValidate
				>
					<div className="contact-form__fields">
						<Field
							id="name"
							label="Name"
							value={name}
							error={errors.name}
							onChange={setName}
							autoComplete="name"
							placeholder="Your name"
						/>
						<Field
							id="email"
							label="Email"
							type="email"
							value={email}
							error={errors.email}
							onChange={setEmail}
							autoComplete="email"
							placeholder="you@example.com"
						/>
						<div className="contact-field">
							<label htmlFor="message" className="contact-field__label">
								Message
							</label>
							<textarea
								id="message"
								name="message"
								rows={6}
								value={message}
								onChange={(event) => setMessage(event.target.value)}
								aria-invalid={Boolean(errors.message)}
								aria-describedby={errors.message ? "message-error" : undefined}
								className="contact-field__input contact-field__textarea"
								placeholder="Tell me about the role, project, or idea..."
							/>
							{errors.message ? (
								<p id="message-error" className="contact-field__error">
									{errors.message}
								</p>
							) : null}
						</div>
					</div>

					<div className="contact-form__actions">
						<button
							type="submit"
							className="network-btn"
							disabled={status === "submitting"}
						>
							{status === "submitting" ? "Sending…" : "Send message"}
						</button>
						{statusMessage ? (
							<output
								className={
									status === "error"
										? "contact-form__status contact-form__status--error"
										: status === "success"
											? "contact-form__status contact-form__status--success"
											: "contact-form__status"
								}
							>
								{statusMessage}
							</output>
						) : null}
					</div>
				</form>
			</div>
		</section>
	);
}

function Field({
	id,
	label,
	value,
	onChange,
	error,
	type = "text",
	autoComplete,
	placeholder,
}: {
	id: string;
	label: string;
	value: string;
	onChange: (value: string) => void;
	error?: string;
	type?: string;
	autoComplete?: string;
	placeholder?: string;
}) {
	return (
		<div className="contact-field">
			<label htmlFor={id} className="contact-field__label">
				{label}
			</label>
			<input
				id={id}
				name={id}
				type={type}
				value={value}
				autoComplete={autoComplete}
				placeholder={placeholder}
				onChange={(event) => onChange(event.target.value)}
				aria-invalid={Boolean(error)}
				aria-describedby={error ? `${id}-error` : undefined}
				className="contact-field__input"
			/>
			{error ? (
				<p id={`${id}-error`} className="contact-field__error">
					{error}
				</p>
			) : null}
		</div>
	);
}
