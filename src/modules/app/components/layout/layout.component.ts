import { Component } from '@angular/core';

@Component({
    selector: 'app-layout',
    template: `
        <div class="wrapper">
            <div class="grid">
                <div class="menu">
                    <app-menu-button>
                        <div class="button-content">
                            <div class="icon-container">
                                <app-home-icon></app-home-icon>
                            </div>

                            HOME
                        </div>
                    </app-menu-button>
                </div>
                <div class="content"></div>
            </div>
        </div>
    `,
    styles: [
        `
            app-menu-button {
                height: 5rem;
            }

            .wrapper {
                height: 100%;
                overflow: hidden;
            }

            .grid {
                display: grid;
                grid-template-columns: 1fr 5fr;
                height: 100%;
            }

            .menu {
                background: var(--color-white);
            }

            .content {
                background: linear-gradient(180deg, #f3f3fb 0%, #fdfbfd 100%);
            }

            .button-content {
                display: grid;
                grid-template-columns: auto 1fr;
                grid-gap: 1.7rem;
                align-items: center;
                padding-left: 3.5rem;
                padding-right: 10rem;
            }

            .icon-container {
                height: 2.4rem;
                width: 2.4rem;
            }
        `,
    ],
})
export class LayoutComponent {}
