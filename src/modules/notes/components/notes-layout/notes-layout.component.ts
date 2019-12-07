import { Component } from '@angular/core';

@Component({
    selector: 'app-notes-layout',
    template: `
        <div class="grid">
            <div class="notes">
                <app-notes-header></app-notes-header>
                <app-note-entities-container></app-note-entities-container>
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

            .text-editor {
            }

            .text-area {
                width: 100%;
                height: 100%;
            }

            .notes {
                display: grid;
                grid-template-rows: auto 1fr;
                grid-gap: 3rem;
                height: 100%;
                overflow: hidden;
            }
        `,
    ],
})
export class NotesLayoutComponent {}
