import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SubRoutingModule } from './sub.routing';
import { TotoComponent } from './toto/toto.component';

@NgModule({
    declarations: [
      TotoComponent
    ],
    imports: [
      SubRoutingModule
    ],
    exports: [],
    providers: []
  })
export class SubModule { }
