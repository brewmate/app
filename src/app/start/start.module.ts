import { NgModule } from '@angular/core';

import { StartRoutingModule } from './start-routing.module';
import { StartComponent } from './start.component';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [
    SharedModule,

    StartRoutingModule
  ],
  declarations: [
    StartComponent
  ]
})
export class StartModule { }
