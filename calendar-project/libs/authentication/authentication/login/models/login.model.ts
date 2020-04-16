export interface User {
  username?: string;
  email: string;
  password: string;
}

export enum MarkControlState {
  DIRTY,
  RESET,
}
