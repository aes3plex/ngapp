import { NgModule } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarContainerComponent } from './containers/sidebar-container/sidebar-container.component';
import { IconsModule } from '../icons/icons.module';
import { ControlsModule } from '../controls/controls.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [IconsModule, ControlsModule, CommonModule],
    declarations: [SidebarComponent, SidebarContainerComponent],
    exports: [SidebarContainerComponent],
})
export class SidebarModule {}
