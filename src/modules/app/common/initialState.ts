import { IAppState } from '../interfaces/IAppState';
import { SidebarTab } from '../../sidebar/enums/SidebarTab';

export const initialState: IAppState = {
    activeSidebarTab: SidebarTab.NOTES,
};
