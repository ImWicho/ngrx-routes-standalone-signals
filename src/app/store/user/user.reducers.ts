import { createReducer, on } from "@ngrx/store";
import { saveUser } from "./user.actions";

export interface UserState{
  username: string;
  password: string;
}

const initalState: UserState = {
  username: 'Luis',
  password: '1234'
}

export const userReducer = createReducer(
  initalState,
  on(saveUser, (state, { user }) => (user) )
)