import { Profile, User } from 'ngx-login-client';

export class UserState implements User {
  attributes: Profile;
  id: string;
  type: string;
  links?: {
    self: string;
  };
  errorMessage: string;
}

export const initialState: UserState | null = null;
