import { IAppState } from '../interfaces/IAppState';
import { SidebarTab } from '../../sidebar/enums/SidebarTab';
import { IdGeneratorService } from '../services/id-generator.service';

export const initialState: IAppState = {
    activeSidebarTab: SidebarTab.NOTES,
    notes: [
        {
            id: new IdGeneratorService().getID(),
            title: 'Lorem',
            content: 'Proin sed libero enim sed. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Turpis egestas maecenas pharetra convallis posuere morbi. At auctor urna nunc id. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. In ornare quam viverra orci sagittis eu volutpat. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Felis eget velit aliquet sagittis id consectetur purus. Maecenas ultricies mi eget mauris pharetra et. Et malesuada fames ac turpis egestas sed. Maecenas pharetra convallis posuere morbi. Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Dictum at tempor commodo ullamcorper a lacus vestibulum.',
        },
        {
            id: new IdGeneratorService().getID(),
            title: 'Versions',
            content: 'Mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Integer enim neque volutpat ac tincidunt vitae semper quis. Urna molestie at elementum eu facilisis sed. Etiam dignissim diam quis enim. Lectus arcu bibendum at varius. Nunc vel risus commodo viverra maecenas accumsan. Amet aliquam id diam maecenas ultricies mi eget mauris pharetra. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Facilisis leo vel fringilla est ullamcorper. Eleifend donec pretium vulputate sapien nec sagittis aliquam. ',
        },
    ],
    activeNoteId: null,
};
