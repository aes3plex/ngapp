import { NgModule } from '@angular/core';
import { NotesLayoutComponent } from './components/notes-layout/notes-layout.component';
import { NoteEntityComponent } from './components/note-entity/note-entity.component';
import { NoteEntitiesContainerComponent } from './containers/note-entities-container/note-entities-container.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [
        NotesLayoutComponent,
        NoteEntityComponent,
        NoteEntitiesContainerComponent,
    ],
    exports: [NotesLayoutComponent],
})
export class NotesModule {}
