import { initialState } from '../../app/common/initialState';
import { SetActiveNote } from '../actions/SetActiveNote';

type Actions = SetActiveNote;

export function notesReducer(state = initialState, action: Actions) {
    switch (action.type) {
        case SetActiveNote.type:
            return {
                ...state,
                activeNoteId: action.noteId,
            };

        default:
            return state;
    }
}
