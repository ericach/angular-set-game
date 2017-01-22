import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { SetGameComponent, SetCardComponent } from './index';

@NgModule({
    declarations: [
        SetGameComponent,
        SetCardComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    exports: [
        SetGameComponent,
        SetCardComponent
    ]
})
export class SetGameModule {
}
