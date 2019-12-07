import { Component } from '@angular/core';

@Component({
    selector: 'app-notes-header',
    template: `
        <div class="header">Notes</div>
    `,
    styles: [
        `
            .header {
                font-size: 3.6rem;
            }
        `,
    ],
})
export class NotesHeaderComponent {}
