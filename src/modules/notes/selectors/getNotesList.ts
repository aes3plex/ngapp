import { createSelector } from '@ngrx/store';
import { getAppState } from '../../app/selectors/getAppState';

export const getNotesList = createSelector(getAppState, state => state.notes);
