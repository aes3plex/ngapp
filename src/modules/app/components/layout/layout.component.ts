import { Component } from '@angular/core';

@Component({
    selector: 'app-layout',
    template: `
        <div class="wrapper">
            <div class="grid">
                <app-sidebar-container class="sidebar"></app-sidebar-container>
                <div class="content"></div>
            </div>
        </div>
    `,
    styles: [
        `
            .wrapper {
                height: 100%;
                overflow: hidden;
            }

            .grid {
                display: grid;
                grid-template-columns: 29rem 1fr;
                height: 100%;
            }

            .content {
                background: linear-gradient(
                    180deg,
                    var(--color-background-start) 0%,
                    var(--color-background-finish) 100%
                );
            }

            .sidebar {
                position: relative;
                box-shadow: 2.4rem 0.6rem 5rem rgba(0, 0, 0, 0.02),
                3.5rem 0 7rem rgba(86, 128, 248, 0.05),
                0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
            }
        `,
    ],
})
export class LayoutComponent {}
