import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app/app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarModule } from '../sidebar/sidebar.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducer } from './reducers/appReducer';


@NgModule({
    declarations: [AppComponent, LayoutComponent],
    imports: [
        BrowserModule,
        SidebarModule,
        StoreModule.forRoot(appReducer),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: true,
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
