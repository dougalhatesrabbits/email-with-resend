/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

import { Resend } from "resend";

export default {
	async fetch(request, env, ctx) {
		const resend = new Resend("your_resend_api_key");

		const { data, error } = await resend.emails.send({
			from: "hello@example.com",
			to: "someone@example.com",
			subject: "Hello World",
			html: "<p>Hello from Workers</p>",
		});

		return Response.json({ data, error });
	},
};
