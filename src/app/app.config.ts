import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import {rootReducer,metaReducers} from './reducer/index-reducer';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'
import { StoreDevtoolsModule, provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideStore(rootReducer, { metaReducers }), provideAnimationsAsync(), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
