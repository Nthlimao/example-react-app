export enum Roles {
  admin = "ADMIN",
  dev = "DEV",
}

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  role: Roles;
};
