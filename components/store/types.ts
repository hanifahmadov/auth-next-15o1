/* eslint-disable */

// types
export interface User {
	username: string;
	email: string;
	avatar?: string;
	accessToken?: string;
}

export interface UserState {
	user: User | null;
	setUser: (user: User) => void;
	clearUser: () => void;
}
