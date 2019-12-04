import { Component } from '@angular/core';

@Component({
    selector: 'app-layout',
    template: `
        <div class="wrapper">
            <div class="grid">
                <app-sidebar-container></app-sidebar-container>
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
                background: linear-gradient(180deg, #f3f3fb 0%, #fdfbfd 100%);
            }
        `,
    ],
})
export class LayoutComponent {}
