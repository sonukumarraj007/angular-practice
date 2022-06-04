import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  { path: 'contact-us', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
