import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { FaqComponent } from './faq/faq.component';
import { ProfileComponent } from './profile/profile.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AuthInterceptorService } from "./auth-interceptor.service";
import { RegistrationModule } from "./registration/registration.module";
import {MessagesModule} from "./messages/messages.module";
import {LayoutModule} from "./layout/layout.module";
import {LoaderComponent} from "./shared/loader/loader.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    FaqComponent,
    ProfileComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    RegistrationModule,
    MessagesModule,
    LayoutModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
