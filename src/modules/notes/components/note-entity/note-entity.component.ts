import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-notes-entity',
    template: `
        <div class="grid">
            <div class="title">title</div>
            <div class="content">content</div>
        </div>
    `,
    styles: [
        `
            .grid {
                display: grid;
                grid-template-rows: auto 1fr;
                grid-gap: 1.6rem;
                padding: 4rem;
                height: 20rem;
                background: var(--color-white);
                border-radius: 6px;
            }

            .title {
                font-size: 1.8rem;
                font-weight: 600;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .content {
                font-size: 1.6rem;
                line-height: 2.6rem;
                color: var(--color-base-grey);
                overflow: hidden;
                text-overflow: ellipsis;
                text-align: justify;
            }
        `,
    ],
})
export class NoteEntityComponent {
    @Input() public title: string;
    @Input() public content: string;
}
