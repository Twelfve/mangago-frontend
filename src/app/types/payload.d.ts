export interface ISignupPayload {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
}

export interface ILoginPayload {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface IUpdateUserPayload {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export interface INewUserAccountPayload {
  name: string;
  number: string;
  locationId: number;
}

export interface IUpdatePassword {
  email: string;
}
