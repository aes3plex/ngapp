import { NgModule } from '@angular/core';
import { NotesLayoutComponent } from './components/notes-layout/notes-layout.component';
import { NoteEntityComponent } from './components/note-entity/note-entity.component';
import { NoteEntitiesContainerComponent } from './containers/note-entities-container/note-entities-container.component';
import { CommonModule } from '@angular/common';
import { NotesHeaderComponent } from './components/notes-header/notes-header.component';
import { NoteEditorComponent } from './components/note-editor/note-editor.component';
import { NoteEditorContainerComponent } from './containers/note-editor-container/note-editor-container.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        NotesLayoutComponent,
        NoteEntityComponent,
        NoteEntitiesContainerComponent,
        NotesHeaderComponent,
        NoteEditorComponent,
        NoteEditorContainerComponent,
    ],
    exports: [NotesLayoutComponent],
})
export class NotesModule {}
