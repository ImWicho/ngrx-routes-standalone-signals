import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.reducers';
 
const select = createFeatureSelector<UserState>('user')
// export const select = (state: AppState) => state;
 
export const selectUser = createSelector(
  select,
  (state) => state
);