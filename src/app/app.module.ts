import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//add modulo core
import {CoreModule } from './core/core.module';
//add module shared
import { SharedModule } from './shared/shared.module';
//add moduls material
import { MatSliderModule } from '@angular/material/slider';
import { MatPseudoCheckboxModule } from '@angular/material/core';
//add firebase config
import { environment } from 'src/environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth'; //esto cambia mucho en relacion a mis tutoriales aqui tengo dudas, antes era Angular FireAuth
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { Firestore } from 'firebase/firestore'; //este tengo dudas si sirva para algo


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatPseudoCheckboxModule,
    provideFirebaseApp(()=>initializeApp(environment.firebaseConfig)),
    provideAuth(()=>getAuth()),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
