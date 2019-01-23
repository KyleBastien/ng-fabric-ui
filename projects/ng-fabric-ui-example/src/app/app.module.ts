import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { FabricLabelModule, FabricSpinnerModule, FabricLabelComponent, FabricSpinnerComponent } from 'ng-fabric-ui';

import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

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
  entryComponents: [FabricLabelComponent, FabricSpinnerComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const labelEl = createCustomElement(FabricLabelComponent, { injector });
    customElements.define('fabric-ui-label', labelEl);

    const spinnerEl = createCustomElement(FabricSpinnerComponent, { injector });
    customElements.define('fabric-ui-spinner', spinnerEl);
  }
  ngDoBootstrap() {}
}
