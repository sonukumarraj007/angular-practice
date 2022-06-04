import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { MainComponent } from './shared/layout/main/main.component';
import { HomeComponent } from './shared/page/home/home.component';
import { AboutUsComponent } from './shared/page/about-us/about-us.component';
import { ContactUsComponent } from './shared/page/contact-us/contact-us.component';
import { ServiceComponent } from './shared/page/service/service.component';
import { PorfolioComponent } from './shared/page/porfolio/porfolio.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    ServiceComponent,
    PorfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
