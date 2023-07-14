import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '..';
 
const select = createFeatureSelector<number>('counter')

 
export const selectCounter = createSelector(
  select,
  (state) => state
);