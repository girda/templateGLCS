export interface IUser {
  login: string;
  password?: string;
  role?: number | string;
  id?: number;
  email?: string;
  name?: string;
}
