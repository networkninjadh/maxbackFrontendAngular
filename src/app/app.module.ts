import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { FaqComponent } from './faq/faq.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import {SignInModule} from "./sign-in/sign-in.module";
import {CreateAccountModule} from "./create-account/create-account.module";
import { ProfileComponent } from './profile/profile.component';
import { MessageboardComponent } from './messageboard/messageboard.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    FaqComponent,
    ProfileComponent,
    MessageboardComponent,
    MessageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //SignInModule,
    //CreateAccountModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }