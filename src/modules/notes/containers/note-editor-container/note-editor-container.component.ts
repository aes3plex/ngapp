import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { INote } from '../../interfaces/INote';
import { select, Store } from '@ngrx/store';
import { IRootState } from '../../../app/interfaces/IRootState';
import { getActiveNote } from '../../selectors/getActiveNode';

@Component({
    selector: 'app-note-editor-container',
    template: `
        <app-note-editor [activeNote]="activeNote$ | async"></app-note-editor>
    `,
    styles: [``],
})
export class NoteEditorContainerComponent {
    public activeNote$: Observable<INote | undefined>;

    constructor(private store: Store<IRootState>) {
        this.activeNote$ = store.pipe(select(getActiveNote));
    }
}
