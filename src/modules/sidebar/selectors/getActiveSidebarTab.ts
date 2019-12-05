import { createSelector } from '@ngrx/store';
import { getAppState } from '../../app/selectors/getAppState';

export const getActiveSidebarTab = createSelector(getAppState, state => state.activeSidebarTab);
