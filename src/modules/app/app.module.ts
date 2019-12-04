import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app/app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { IconsModule } from '../icons/icons.module';
import { ControlsModule } from '../controls/controls.module';

@NgModule({
    declarations: [AppComponent, LayoutComponent],
    imports: [BrowserModule, IconsModule, ControlsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
