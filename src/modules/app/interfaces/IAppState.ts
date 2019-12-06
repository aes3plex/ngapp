import { SidebarTab } from '../../sidebar/enums/SidebarTab';
import { INote } from '../../notes/interfaces/INote';

export interface IAppState {
    activeSidebarTab: SidebarTab;
    notes: INote[];
}
