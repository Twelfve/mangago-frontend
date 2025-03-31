export interface IUser {
  id: number;
  username: string;
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	password: string;
  isEmailConfirmed: boolean;
	createdAt: Date;
	updatedAt: Date;
	deletedAt: Date;
};

