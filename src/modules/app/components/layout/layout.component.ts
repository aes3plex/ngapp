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
                grid-template-columns: 1fr 4fr;
                height: 100%;
            }

            .menu {
                background-color: rgb(45, 158, 144);
            }

            .content {
                background-color: rgba(34, 134, 120, 0.73);
            }
        `,
    ],
})
export class LayoutComponent {}
