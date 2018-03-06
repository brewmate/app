import { NgModule } from '@angular/core';
import { NgxsModule } from 'ngxs';
import { BreweryStore } from './brewery.store';
import { BrewStore } from './brew.store';

@NgModule({
  imports: [
    NgxsModule.forFeature([
      BreweryStore,
      BrewStore,
    ])
  ]
})
export class DomainModule {}
