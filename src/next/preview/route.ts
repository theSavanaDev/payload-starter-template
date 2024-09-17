import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";

const payloadToken = "payload-token";

export async function GET(
	req: Request & {
		cookies: {
			get: (name: string) => {
				value: string;
			};
		};
	},
): Promise<Response> {
	const token = req.cookies.get(payloadToken)?.value;
	const { searchParams } = new URL(req.url);
	const path = searchParams.get("path");

	if (!path) {
		return new Response("No path has been provided.", { status: 404 });
	}

	if (!token) {
		new Response("You are not allowed to preview this page.", { status: 403 });
	}

	const user = jwt.decode(token, { complete: true });

	if (!user) {
		draftMode().disable();
		return new Response("You are not allowed to preview this page.", { status: 403 });
	}

	draftMode().enable();
	redirect(path);
}
