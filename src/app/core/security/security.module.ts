import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { NgxsModule } from 'ngxs';

import { SecurityService } from './security.service';
import { SecurityStore } from './security.store';
import { UserRedirectGuard } from './guards/user-redirect.guard';
import { AuthenticatedGuard } from './guards/authenticated.guard';

export const DEPENDENCIES = [
  RouterModule,
  AngularFireAuthModule,
  NgxsModule,
];

export const SHARED_COMPONENTS = [
];

export const SHARED_SERVICES = [
  SecurityService,
  AuthenticatedGuard,
  UserRedirectGuard,
];

@NgModule({
  imports: DEPENDENCIES,
  declarations: SHARED_COMPONENTS,
  exports: SHARED_COMPONENTS
})
export class SecurityModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootSecurityModule,
      providers: SHARED_SERVICES
    };
  }
}

@NgModule({
  imports: [
    ...DEPENDENCIES,
    // Imports we only want to be called once
    // NgxsModule.forFeature([
    //   SecurityStore,
    // ])
  ],
  exports: [
    SecurityModule
  ]
})
export class RootSecurityModule {
  constructor() {
    console.log('create root security module');
  }
}
