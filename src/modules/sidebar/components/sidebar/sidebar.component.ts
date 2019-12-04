import { Component } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    template: `
        <div class="menu">
            <app-menu-button class="button" [active]="true">
                <div class="button-content">
                    <div class="icon-container">
                        <app-home-icon></app-home-icon>
                    </div>
                    <div class="text-container">HOME</div>
                </div>
            </app-menu-button>
            <app-menu-button class="button" [active]="false">
                <div class="button-content">
                    <div class="icon-container">
                        <app-home-icon></app-home-icon>
                    </div>
                    <div class="text-container">HOME</div>
                </div>
            </app-menu-button>
        </div>
    `,
    styles: [
        `
            .button {
                height: 5rem;
            }

            .menu {
                background: var(--color-white);
            }

            .button-content {
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
export class SidebarComponent {}
