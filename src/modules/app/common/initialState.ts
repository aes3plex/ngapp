import { IAppState } from '../interfaces/IAppState';
import { SidebarTab } from '../../sidebar/enums/SidebarTab';
import { IdGeneratorService } from '../services/id-generator.service';

export const initialState: IAppState = {
    activeSidebarTab: SidebarTab.NOTES,
    notes: [
        {
            id: new IdGeneratorService().getID(),
            title: 'Title1',
            content: 'Note content',
        },
        {
            id: new IdGeneratorService().getID(),
            title: 'Title2',
            content: 'Note content',
        },
        {
            id: new IdGeneratorService().getID(),
            title: 'Note title',
            content: 'Note content',
        },
    ],
};
