export interface User {
  id: number;
  username: string;
  role: "user" | "admin";
  email: string;
  balance: number;
  city: string;
  country: string;
}
