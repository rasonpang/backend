export interface User {
	id: string; // Randomized hash
	username: string;
	password: string;
	gId?: string;
	address: string;
}