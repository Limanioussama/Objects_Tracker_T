import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { FirebaseApp } from '@angular/fire/app';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

// Define your Firebase configuration
const firebaseConfig = environment.firebase;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => {
      const firebaseApp = initializeApp(firebaseConfig);
      return firebaseApp;
    }),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
  ],
  providers: [{ provide: FIREBASE_OPTIONS, useValue: environment.firebase }],

  bootstrap: [AppComponent]
})
export class AppModule {}
