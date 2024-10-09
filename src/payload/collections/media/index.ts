import {
	HTMLConverterFeature,
	InlineToolbarFeature,
	lexicalEditor,
	lexicalHTML,
} from "@payloadcms/richtext-lexical";

import { anyone } from "@/payload-access/anyone";
import { authenticated } from "@/payload-access/authenticated";

import type { CollectionConfig } from "payload";

const Media: CollectionConfig = {
	slug: "media",
	labels: {
		singular: "Media",
		plural: "Media",
	},
	admin: {
		defaultColumns: ["filename", "mimeType", "alt", "caption"],
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
		{
			name: "caption",
			type: "richText",
			editor: lexicalEditor({
				features: ({ rootFeatures }) => {
					return [...rootFeatures, HTMLConverterFeature({}), InlineToolbarFeature()];
				},
			}),
		},
		/* converts the referenced lexical richText field into HTML */
		lexicalHTML("caption", { name: "caption_html" }),
	],
	upload: {
		mimeTypes: ["image/*"],
		resizeOptions: { width: 1280 },
	},
};

export default Media;
