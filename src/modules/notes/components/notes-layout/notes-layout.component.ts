import { Component } from '@angular/core';

@Component({
    selector: 'app-notes-layout',
    template: `
        <div class="grid">
            <div>
                <app-notes-entity></app-notes-entity>
            </div>
            <div></div>
        </div>
    `,
    styles: [
        `
            .grid {
                display: grid;
                grid-template-columns: 58rem 1fr;
                grid-gap: 8rem;
                padding: 11rem 6rem 4rem;
                height: 100%;
            }
        `,
    ],
})
export class NotesLayoutComponent {}
