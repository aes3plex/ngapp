export class SetActiveNote {
    public static readonly type = '[Notes] Set active note';

    public readonly type = SetActiveNote.type;

    constructor(public readonly noteId: string) {}
}
