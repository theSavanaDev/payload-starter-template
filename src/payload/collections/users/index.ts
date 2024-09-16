import { authenticated } from "@/payload-access/authenticated";

import type { CollectionConfig } from "payload";

const Users: CollectionConfig = {
	slug: "users",
	labels: {
		singular: "User",
		plural: "Users",
	},
	admin: {
		defaultColumns: ["name", "email", "createdAt"],
		useAsTitle: "name",
	},
	access: {
		admin: authenticated,
		create: authenticated,
		delete: authenticated,
		read: authenticated,
		update: authenticated,
	},
	auth: true,
	fields: [
		{
			name: "name",
			label: "Name",
			type: "text",
			required: true,
		},
	],
};

export default Users;
