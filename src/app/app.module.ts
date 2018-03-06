import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { LocalStoragePlugin, NgxsModule, ReduxDevtoolsPlugin } from 'ngxs';
import { AngularFireModule } from 'angularfire2';

import { SecurityModule, SecurityStore } from './core/security';
import { DomainModule } from './core/domain/domain.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),

    AngularFireModule.initializeApp(environment.firebase),

    NgxsModule.forRoot([SecurityStore], {
      plugins: environment.production ? [] : [
        ReduxDevtoolsPlugin.forRoot({}),
        LocalStoragePlugin.forRoot({
          key: '@@STATE',
          serialize: JSON.stringify,
          deserialize: JSON.parse,
        })
      ]
    }),

    SecurityModule.forRoot(),
    DomainModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
