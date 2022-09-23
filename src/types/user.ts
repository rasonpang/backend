export interface UserCreate {
	username: string;
	password: string;
	displayName: string;
	address: string;
	phoneNumber: string;
}

export interface UserUpdate {
	password?: string;
	displayName?: string;
	address?: string;
	phoneNumber?: string;
}

export interface UserWhere {
	username?: string;
	password?: string;
	displayName?: string;
	address?: string;
	phoneNumber?: string;
}