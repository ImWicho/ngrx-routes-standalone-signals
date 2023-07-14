import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { isDevMode } from '@angular/core';
import { reducers } from './app/store';
import { provideRouter } from '@angular/router';
import { ROUTES } from './app/app.routes';
bootstrapApplication(AppComponent, {
    providers: [
      provideRouter(ROUTES),
      provideStore(reducers),
      provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
    ]
})
