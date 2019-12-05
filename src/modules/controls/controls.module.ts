import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SidebarTabComponent } from './components/sidebar-tab/sidebar-tab.component';

@NgModule({
    imports: [CommonModule],
    declarations: [SidebarTabComponent],
    exports: [SidebarTabComponent],
})
export class ControlsModule {}
