import { ActionReducerMap } from "@ngrx/store"
import * as Counter from './counter' 
import * as User from './user' 
import { UserState } from "./user"
export interface AppState{
  counter: number,
  user: UserState
}

export const reducers: ActionReducerMap<AppState> = {
  counter: Counter.counterReducer,
  user: User.userReducer
}