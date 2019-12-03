import { Component } from '@angular/core';

@Component({
    selector: 'app-layout',
    template: `
        <div class="wrapper">
            <div class="grid">
                <div class="menu"></div>
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
                grid-template-columns: 1fr 5fr;
                height: 100%;
            }

            .menu {
                background: #ffffff;
            }

            .content {
                background: linear-gradient(180deg, #f3f3fb 0%, #fdfbfd 100%);
            }
        `,
    ],
})
export class LayoutComponent {}
