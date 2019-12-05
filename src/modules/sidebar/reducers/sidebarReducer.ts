import { SetActiveSidebarTab } from '../actions/SetActiveSidebarTab';
import { initialState } from '../../app/common/initialState';

type Actions = SetActiveSidebarTab;

export function sidebarReducer(state = initialState, action: Actions) {
    switch (action.type) {
        case SetActiveSidebarTab.type:
            return {
                ...state,
                activeSidebarTab: action.sidebarTab,
            };

        default:
            return state;
    }
}
