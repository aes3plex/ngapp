import { createSelector } from '@ngrx/store';
import { getAppState } from '../../app/selectors/getAppState';

export const getActiveNoteId = createSelector(
    getAppState,
    state => state.activeNoteId,
);
