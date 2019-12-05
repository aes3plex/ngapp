import { NgModule } from '@angular/core';
import { NotesIconComponent } from './components/notes-icon/notes-icon.component';
import { ProfileIconComponent } from './components/profile-icon/profile-icon.component';

@NgModule({
    imports: [],
    declarations: [NotesIconComponent, ProfileIconComponent],
    exports: [NotesIconComponent, ProfileIconComponent],
})
export class IconsModule {}
