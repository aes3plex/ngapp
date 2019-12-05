import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SidebarTab } from '../../enums/SidebarTab';

@Component({
    selector: 'app-sidebar',
    template: `
        <div class="sidebar">
            <app-menu-button
                class="tab"
                [active]="activeTab === tab.PROFILE"
                (onselect)="handleSelect(tab.PROFILE)"
            >
                <div class="tab-content">
                    <div class="icon-container">
                        <app-profile-icon [isActive]="activeTab === tab.PROFILE"></app-profile-icon>
                    </div>
                    <div class="text-container">PROFILE</div>
                </div>
            </app-menu-button>
            <app-menu-button
                class="tab"
                [active]="activeTab === tab.NOTES"
                (onselect)="handleSelect(tab.NOTES)"
            >
                <div class="tab-content">
                    <div class="icon-container">
                        <app-notes-icon [isActive]="activeTab === tab.NOTES"></app-notes-icon>
                    </div>
                    <div class="text-container">NOTES</div>
                </div>
            </app-menu-button>
        </div>
    `,
    styles: [
        `
            .tab {
                height: 5rem;
            }

            .sidebar {
                display: grid;
                grid-auto-flow: row;
                grid-gap: 0.5rem;
                background: var(--color-white);
                padding: 2rem 0;
            }

            .tab-content {
                display: grid;
                grid-template-columns: auto 1fr;
                grid-gap: 1.7rem;
                align-items: center;
                padding: 0 3.5rem;
            }

            .icon-container {
                height: 2.4rem;
                width: 2.4rem;
            }

            .text-container {
                overflow: hidden;
                text-overflow: ellipsis;
            }
        `,
    ],
})
export class SidebarComponent {
    public readonly tab = SidebarTab;

    @Input() public activeTab: SidebarTab;

    @Output() public selectTab: EventEmitter<SidebarTab> = new EventEmitter();

    public handleSelect(sidebarTab: SidebarTab): void {
        this.selectTab.emit(sidebarTab);
    }
}
