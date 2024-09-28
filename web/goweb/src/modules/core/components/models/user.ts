export interface User {
  id: number;
  name: string;
  email: string;
  email_verified: string;
  groups: string[];
  sub: string;
  aud: string;
  exp: number;
  iat: number;
}
