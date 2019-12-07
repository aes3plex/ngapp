import { Component } from '@angular/core';

@Component({
    selector: 'app-notes-layout',
    template: `
        <div class="grid">
            <app-note-entities-container class="notes"></app-note-entities-container>
            <div class="text-editor"></div>
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

            .notes {
                display: grid;
                grid-auto-flow: row;
                grid-gap: 2rem;
            }
            
            .text-editor {
            }
        `,
    ],
})
export class NotesLayoutComponent {}
