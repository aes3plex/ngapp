import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SidebarTab } from '../../enums/SidebarTab';
import { IRootState } from '../../../app/interfaces/IRootState';
import { select, Store } from '@ngrx/store';
import { getActiveSidebarTab } from '../../selectors/getActiveSidebarTab';
import { SetActiveSidebarTab } from '../../actions/SetActiveSidebarTab';

@Component({
    selector: 'app-sidebar-container',
    template: `
        <app-sidebar
            [activeTab]="currentTab$ | async"
            (selectTab)="handleSelectTab($event)"
        ></app-sidebar>
    `,
    styles: [],
})
export class SidebarContainerComponent {
    public currentTab$: Observable<SidebarTab>;

    constructor(public readonly store: Store<IRootState>) {
        this.currentTab$ = this.store.pipe(select(getActiveSidebarTab));
    }

    public handleSelectTab(activeTab: SidebarTab): void {
        this.store.dispatch(new SetActiveSidebarTab(activeTab));
    }
}
