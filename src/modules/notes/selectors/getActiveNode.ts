import { createSelector } from '@ngrx/store';
import { getNotesList } from './getNotesList';
import { getActiveNoteId } from './getActiveNoteId';

export const getActiveNote = createSelector(
    getNotesList,
    getActiveNoteId,
    (notes, activeNoteId) => notes.find(note => note.id === activeNoteId),
);
