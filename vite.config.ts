import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

const config = defineConfig(({ command }) => ({
	resolve: { tsconfigPaths: true },
	plugins: [
		// Devtools must be first (TanStack guidance).
		devtools(),
		tailwindcss(),
		tanstackStart(),
		viteReact(),
		// Nitro handles production deploy; TanStack Start's own dev middleware is
		// more reliable locally (avoids Nitro SSR env-runner timeouts on WSL/cold start).
		...(command === "build"
			? [nitro({ rollupConfig: { external: [/^@sentry\//] } })]
			: []),
	],
	clearScreen: false,
}));

export default config;
