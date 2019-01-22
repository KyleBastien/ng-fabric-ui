import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FabricLabelModule, FabricSpinnerModule } from 'ng-fabric-ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FabricLabelModule,
    FabricSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
