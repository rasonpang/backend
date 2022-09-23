export interface CreateUser {
	username: string;
	password: string;
	displayName: string;
	address: string;
	phoneNumber: string;
}

export interface UpdateUser {
	password?: string;
	displayName?: string;
	address?: string;
	phoneNumber?: string;
}