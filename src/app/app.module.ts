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
import { DataBindindComponent } from './example/data-bindind/data-bindind.component';
import { DirectivesComponent } from './example/directives/directives.component';
import { EventBindingComponent } from './example/event-binding/event-binding.component';
import { PipeComponent } from './example/pipe/pipe.component';
import { CustomPipeComponent } from './example/custom-pipe/custom-pipe.component';
import { CustomDirectiveComponent } from './example/custom-directive/custom-directive.component';
import { NgTempleteComponent } from './example/ng-templete/ng-templete.component';
import { InputDecoratorComponent } from './example/input-decorator/input-decorator.component';
import { OutputDecoratorComponent } from './example/output-decorator/output-decorator.component';
import { ViewChildComponent } from './example/view-child/view-child.component';
import { HttpClientComponent } from './example/http-client/http-client.component';
import { TepmleteDrivenFormComponent } from './example/tepmlete-driven-form/tepmlete-driven-form.component';
import { ReactiveFormComponent } from './example/reactive-form/reactive-form.component';
import { FormArrayComponent } from './example/form-array/form-array.component';

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
    PorfolioComponent,
    DataBindindComponent,
    DirectivesComponent,
    EventBindingComponent,
    PipeComponent,
    CustomPipeComponent,
    CustomDirectiveComponent,
    NgTempleteComponent,
    InputDecoratorComponent,
    OutputDecoratorComponent,
    ViewChildComponent,
    HttpClientComponent,
    TepmleteDrivenFormComponent,
    ReactiveFormComponent,
    FormArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
