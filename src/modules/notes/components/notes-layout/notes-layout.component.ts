import { Component } from '@angular/core';

@Component({
    selector: 'app-notes-layout',
    template: `
        <div class="grid">
            <div class="notes">
                <div class="notes-header">Notes</div>
                <app-note-entities-container class="notes-entities"></app-note-entities-container>
            </div>
            <div class="text-editor">
                <textarea class="text-area"></textarea>
            </div>
        </div>
    `,
    styles: [
        `
            .grid {
                display: grid;
                grid-template-columns: 50rem 1fr;
                grid-gap: 6rem;
                height: 100%;
            }

            .notes-entities {
                display: grid;
                grid-auto-flow: row;
                grid-gap: 2rem;
                height: 100%;
                overflow: auto;
                align-content: start;
            }

            .text-editor {
            }

            .text-area {
                width: 100%;
                height: 100%;
            }

            .notes {
                display: grid;
                grid-template-rows: auto 1fr ;
                grid-gap: 3rem;
                height: 100%;
                overflow: hidden;
            }

            .notes-header {
                font-size: 3.6rem;
            }
        `,
    ],
})
export class NotesLayoutComponent {}
