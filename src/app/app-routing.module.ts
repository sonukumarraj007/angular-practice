import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomDirectiveComponent } from './example/custom-directive/custom-directive.component';
import { CustomPipeComponent } from './example/custom-pipe/custom-pipe.component';
import { DataBindindComponent } from './example/data-bindind/data-bindind.component';
import { DirectivesComponent } from './example/directives/directives.component';
import { EventBindingComponent } from './example/event-binding/event-binding.component';
import { FormArrayComponent } from './example/form-array/form-array.component';
import { HttpClientComponent } from './example/http-client/http-client.component';
import { InputDecoratorComponent } from './example/input-decorator/input-decorator.component';
import { OutputDecoratorComponent } from './example/output-decorator/output-decorator.component';
import { PipeComponent } from './example/pipe/pipe.component';
import { ReactiveFormComponent } from './example/reactive-form/reactive-form.component';
import { TepmleteDrivenFormComponent } from './example/tepmlete-driven-form/tepmlete-driven-form.component';
import { ViewChildComponent } from './example/view-child/view-child.component';
import { AboutUsComponent } from './shared/page/about-us/about-us.component';
import { ContactUsComponent } from './shared/page/contact-us/contact-us.component';
import { HomeComponent } from './shared/page/home/home.component';
import { PorfolioComponent } from './shared/page/porfolio/porfolio.component';
import { ServiceComponent } from './shared/page/service/service.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home-page' },
  { path: 'home-page', component: HomeComponent },
  { path: 'about-us-page', component: AboutUsComponent },
  { path: 'portfolio-page', component: PorfolioComponent },
  { path: 'services-page', component: ServiceComponent },
  { path: 'contact-us-page', component: ContactUsComponent },
  { path: 'custom-directive', component: CustomDirectiveComponent },
  { path: 'custom-pipe', component: CustomPipeComponent },
  { path: 'data-binding', component: DataBindindComponent },
  { path: 'directive', component: DirectivesComponent },
  { path: 'event-binding', component: EventBindingComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'form-array', component: FormArrayComponent },
  { path: 'http-client', component: HttpClientComponent },
  { path: 'input-decorator', component: InputDecoratorComponent },
  { path: 'output-decorator', component: OutputDecoratorComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'templete-driven-form', component: TepmleteDrivenFormComponent },
  { path: 'view-child', component: ViewChildComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
