import { Component, Input } from '@angular/core';
import { INote } from '../../interfaces/INote';

@Component({
    selector: 'app-note-editor',
    template: `
        <div class="no-active" *ngIf="isActive() === false">
            Chose note to edit...
        </div>
        <div class="active" *ngIf="isActive()">
            <div class="title">{{ activeNote.title }}</div>
            <div class="content">{{ activeNote.content }}</div>
        </div>
    `,
    styles: [
        `
            .no-active {
                display: grid;
                align-items: center;
                justify-items: center;
                height: 100%;
                width: 100%;
                border: 0.1rem dashed var(--color-base-grey);
                color: var(--color-base-grey);
            }

            .active {
                display: grid;
                grid-template-rows: auto 1fr;
                grid-gap: 1rem;
                height: 100%;
                overflow: hidden;
                padding: 1rem 3rem;
                border-radius: 0.3rem;
                background: var(--color-white);
            }

            .title {
                font-size: 2rem;
                padding: 2rem;
                border-bottom: 0.1rem solid var(--color-base-grey);
                color: var(--color-base-grey);
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .content {
                padding: 2rem;
                color: var(--color-base-grey);
                overflow: auto;
                line-height: 2.4rem;
                text-overflow: ellipsis;
                text-align: justify;
            }
        `,
    ],
})
export class NoteEditorComponent {
    @Input() activeNote: INote;

    public isActive() {
        return Boolean(this.activeNote);
    }
}
