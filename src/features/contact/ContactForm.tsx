import { useState } from "react";
import { contactSchema, submitContact } from "./contact.functions";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

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
		<section id="contact" className="page-wrap px-4 py-24 pb-32">
			<div className="mb-10 max-w-2xl">
				<p className="section-kicker mb-3">Contact</p>
				<h2 className="display-title m-0 text-3xl font-bold text-[var(--text)] sm:text-4xl">
					Let’s connect a new node
				</h2>
				<p className="mt-3 text-[var(--text-muted)]">
					Share a note about a role, collaboration, or idea. Messages are
					validated on the server.
				</p>
			</div>

			<form
				onSubmit={onSubmit}
				className="max-w-xl rounded-3xl border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8"
				style={{
					boxShadow:
						status === "success"
							? "0 0 0 1px var(--glow), 0 20px 50px var(--glow)"
							: undefined,
				}}
				noValidate
			>
				<div className="grid gap-5">
					<Field
						id="name"
						label="Name"
						value={name}
						error={errors.name}
						onChange={setName}
						autoComplete="name"
					/>
					<Field
						id="email"
						label="Email"
						type="email"
						value={email}
						error={errors.email}
						onChange={setEmail}
						autoComplete="email"
					/>
					<div>
						<label
							htmlFor="message"
							className="mb-2 block text-sm font-semibold text-[var(--text)]"
						>
							Message
						</label>
						<textarea
							id="message"
							name="message"
							rows={5}
							value={message}
							onChange={(event) => setMessage(event.target.value)}
							aria-invalid={Boolean(errors.message)}
							aria-describedby={errors.message ? "message-error" : undefined}
							className="w-full rounded-xl border border-[var(--line)] bg-[var(--bg)] px-3 py-2.5 text-[var(--text)] outline-none ring-[var(--accent)] focus:ring-2"
						/>
						{errors.message ? (
							<p id="message-error" className="mt-1 text-sm text-red-500">
								{errors.message}
							</p>
						) : null}
					</div>
				</div>

				<div className="mt-6 flex flex-wrap items-center gap-3">
					<button
						type="submit"
						className="network-btn"
						disabled={status === "submitting"}
					>
						{status === "submitting" ? "Sending…" : "Send message"}
					</button>
					<output className="m-0 text-sm text-[var(--text-muted)]">
						{statusMessage}
					</output>
				</div>
			</form>
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
}: {
	id: string;
	label: string;
	value: string;
	onChange: (value: string) => void;
	error?: string;
	type?: string;
	autoComplete?: string;
}) {
	return (
		<div>
			<label
				htmlFor={id}
				className="mb-2 block text-sm font-semibold text-[var(--text)]"
			>
				{label}
			</label>
			<input
				id={id}
				name={id}
				type={type}
				value={value}
				autoComplete={autoComplete}
				onChange={(event) => onChange(event.target.value)}
				aria-invalid={Boolean(error)}
				aria-describedby={error ? `${id}-error` : undefined}
				className="w-full rounded-xl border border-[var(--line)] bg-[var(--bg)] px-3 py-2.5 text-[var(--text)] outline-none ring-[var(--accent)] focus:ring-2"
			/>
			{error ? (
				<p id={`${id}-error`} className="mt-1 text-sm text-red-500">
					{error}
				</p>
			) : null}
		</div>
	);
}
