import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConducteurComponent } from './conducteur/conducteur.component';
import { VoitureComponent } from './voiture/voiture.component';
import { ConducteurService } from './conducteur/service/conducteur.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { VilleComponent } from './ville/ville.component';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {TableModule} from 'primeng/table';


const appRoutes: Routes = [
  { path: 'auth/signin' , component:SigninComponent },
  { path: 'admin/dashboard' , component:DashboardComponent },
];

@NgModule({

  
  declarations: [
    AppComponent,
    SigninComponent,
    HeaderComponent,
    DashboardComponent,
    ConducteurComponent,
    VoitureComponent,
    VilleComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    DialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    TableModule

  ],
  providers: [
    AuthService ,
    AuthGuardService,
    ConducteurService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
