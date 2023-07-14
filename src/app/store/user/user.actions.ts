import { createAction, props } from "@ngrx/store";
import { UserState } from "./user.reducers";

export const saveUser = createAction('[USER] user saved',
  props<{ user:UserState }>()
);
