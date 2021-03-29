import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HubComponent } from './hub/hub.component';
import { AppareilComponent } from './appareil/appareil.component';
import { ElectricityService } from './core/services/electricity.service';
import { AppRoutingModule } from './app.routing';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HubComponent,
    TestComponent,
    AppareilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [
    ElectricityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
