import { SidebarTab } from '../enums/SidebarTab';

export class SetActiveSidebarTab {
    public static readonly type = '[Sidebar] Set active sidebar tab';

    public readonly type = SetActiveSidebarTab.type;

    constructor(public readonly sidebarTab: SidebarTab) {}
}
