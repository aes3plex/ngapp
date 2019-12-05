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
                        <app-home-icon></app-home-icon>
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
                        <app-home-icon></app-home-icon>
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
                background: var(--color-white);
            }

            .tab-content {
                display: grid;
                grid-template-columns: auto 1fr;
                grid-gap: 1.7rem;
                align-items: center;
                padding-left: 3.5rem;
                padding-right: 3.5rem;
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
