import type { AccessArgs } from "payload";
import type { User } from "payload";

type isAuthenticated = (args: AccessArgs<User>) => boolean;

export const authenticated: isAuthenticated = ({ req: { user } }) => {
	if (user) {
		return true;
	} else {
		return false;
	}
};
