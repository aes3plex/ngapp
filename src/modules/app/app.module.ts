import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app/app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarModule } from '../sidebar/sidebar.module';

@NgModule({
    declarations: [AppComponent, LayoutComponent],
    imports: [
        BrowserModule,
        SidebarModule,
        // StoreModule.forRoot(appReducer),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
