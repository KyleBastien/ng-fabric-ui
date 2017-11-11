import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FabricLabelModule } from './lib/label/label.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FabricLabelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
