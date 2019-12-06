import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SidebarTab } from '../../../sidebar/enums/SidebarTab';
import { select, Store } from '@ngrx/store';
import { IRootState } from '../../interfaces/IRootState';
import { getActiveSidebarTab } from '../../../sidebar/selectors/getActiveSidebarTab';

@Component({
    selector: 'app-layout-container',
    template: `
        <app-layout [activeTab]="currentTab$ | async"></app-layout>
    `,
    styles: [``],
})
export class LayoutContainerComponent {
    public currentTab$: Observable<SidebarTab>;

    constructor(public readonly store: Store<IRootState>) {
        this.currentTab$ = this.store.pipe(select(getActiveSidebarTab));
    }
}
