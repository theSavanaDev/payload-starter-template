import type { CollectionConfig } from "payload";

import { anyone } from "@/payload-access/anyone";
import { authenticated } from "@/payload-access/authenticated";

export const Media: CollectionConfig = {
	slug: "media",
	labels: {
		singular: "Media",
		plural: "Media",
	},
	admin: {
		defaultColumns: ["filename", "alt", "mimeType"],
	},
	access: {
		create: authenticated,
		delete: authenticated,
		read: anyone,
		update: authenticated,
	},
	fields: [
		{
			name: "alt",
			type: "text",
			required: true,
		},
	],
	upload: {
		mimeTypes: ["image/*"],
		resizeOptions: { width: 1280 },
	},
};