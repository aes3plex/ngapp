import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { INote } from '../../interfaces/INote';
import { IRootState } from '../../../app/interfaces/IRootState';
import { select, Store } from '@ngrx/store';
import { getNotesList } from '../../selectors/getNotesList';
import { SetActiveNote } from '../../actions/SetActiveNote';
import { getActiveNoteId } from '../../selectors/getActiveNoteId';
import { tap, withLatestFrom } from 'rxjs/operators';

@Component({
    selector: 'app-note-entities-container',
    template: `
        <div class="notes">
            <ng-container *ngFor="let note of notes$ | async">
                <app-notes-entity
                    [title]="note.title"
                    [content]="note.content"
                    [isActive]="note.id === activeNoteId"
                    (click)="handleSelectNote(note.id)"
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
export class NoteEntitiesContainerComponent implements OnDestroy{
    private subscription: Subscription;
    public notes$: Observable<INote[]>;
    public activeNoteId: string | null;

    constructor(private store: Store<IRootState>) {
        this.notes$ = store.pipe(select(getNotesList));
        this.subscription = this.store
            .pipe(
                withLatestFrom(
                    this.store.pipe(select(getActiveNoteId)),
                ),
                tap(([state, activeNodeId]) => {
                    this.activeNoteId = activeNodeId;
                }),
            )
            .subscribe();
    }

    public handleSelectNote(noteId: string): void {
        this.store.dispatch(new SetActiveNote(noteId));
    }

    public ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
