import { createSelector } from '@ngrx/store';
import { IRootState } from '../interfaces/IRootState';

export const getAppState = createSelector(
    (state: IRootState) => state.app,
    appState => appState,
);
