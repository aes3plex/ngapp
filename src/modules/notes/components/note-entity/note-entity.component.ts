import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-notes-entity',
    template: `
        <div class="grid" [class.active]="isActive">
            <div class="title" [class.active-text]="isActive">{{ title }}</div>
            <div class="content" [class.active-text]="isActive">
                {{ content }}
            </div>
        </div>
    `,
    styles: [
        `
            .grid {
                display: grid;
                grid-template-rows: auto 1fr;
                grid-gap: 1.6rem;
                padding: 4rem;
                height: 19rem;
                background: var(--color-white);
                border-radius: 0.6rem;
                cursor: pointer;
            }

            .title {
                font-size: 2rem;
                font-weight: 600;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .content {
                font-size: 1.6rem;
                line-height: 2.4rem;
                color: var(--color-base-grey);
                overflow: hidden;
                text-overflow: ellipsis;
                text-align: justify;
            }

            .active-text {
                color: var(--color-white);
            }

            .active {
                background: linear-gradient(
                    110deg,
                    var(--color-active-start) 0%,
                    var(--color-active-finish) 100%
                );
            }
        `,
    ],
})
export class NoteEntityComponent {
    @Input() public title: string;
    @Input() public content: string;
    @Input() public isActive: boolean;
}
