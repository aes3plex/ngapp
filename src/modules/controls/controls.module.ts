import { NgModule } from '@angular/core';
import { MenuButtonComponent } from './components/menu-button/menu-button.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    declarations: [MenuButtonComponent],
    exports: [MenuButtonComponent],
})
export class ControlsModule {}
