import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { INote } from '../../interfaces/INote';
import { IRootState } from '../../../app/interfaces/IRootState';
import { select, Store } from '@ngrx/store';
import { getNotesList } from '../../selectors/getNotesList';

@Component({
    selector: 'app-note-entities-container',
    template: `
        <div class="notes">
            <ng-container *ngFor="let note of notes$ | async">
                <app-notes-entity
                    [title]="note.title"
                    [content]="note.content"
                ></app-notes-entity>
            </ng-container>
        </div>
    `,
    styles: [
        `
            :host {
                height: 100%;
                overflow: auto;
            }

            .notes {
                display: grid;
                grid-auto-flow: row;
                grid-gap: 2rem;
                align-content: start;
            }
        `,
    ],
})
export class NoteEntitiesContainerComponent {
    public notes$: Observable<INote[]>;

    constructor(private store: Store<IRootState>) {
        this.notes$ = store.pipe(select(getNotesList));
    }
}
