import { NgModule } from '@angular/core';
import { NotesLayoutComponent } from './components/notes-layout/notes-layout.component';
import { NoteEntityComponent } from './components/note-entity/note-entity.component';

@NgModule({
    imports: [],
    declarations: [NotesLayoutComponent, NoteEntityComponent],
    exports: [NotesLayoutComponent],
})
export class NotesModule {}
