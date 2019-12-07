import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { INote } from '../../interfaces/INote';
import { IRootState } from '../../../app/interfaces/IRootState';
import { select, Store } from '@ngrx/store';
import { getNotesList } from '../../selectors/getNotesList';

@Component({
    selector: 'app-note-entities-container',
    template: `
        <ng-container *ngFor="let note of notes$ | async">
            <app-notes-entity
                [title]="note.title"
                [content]="note.content"
            ></app-notes-entity>
        </ng-container>
    `,
    styles: [
        `
            :host {
                display: block;
                overflow: overlay;
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
