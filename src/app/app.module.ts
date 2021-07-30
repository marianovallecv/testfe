import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/auth/login/login.component';

import { CandidateComponent } from './components/candidate/candidate.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { DisableDirective } from './directives/disable.directive';
import { InterceptorService } from './services/interceptor.service';

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/shared/footer/footer.component';

import { PipformatPipe } from './pipes/pipformat.pipe';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,

    CandidateComponent,

    DisableDirective,
    PipformatPipe,

    NavbarComponent,
    LoadingComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-Ar' },
    InterceptorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
