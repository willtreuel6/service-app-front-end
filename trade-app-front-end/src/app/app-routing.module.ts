import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ResidentialComponent } from './components/residential/residential.component';
import { CommercialComponent } from './components/commercial/commercial.component';
import { WorkComponent } from './components/work/work.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
{
  path:"",
  component:HomeComponent
},
{
  path:"about",
  component : AboutComponent
},
{
  path:"residential-services",
  component: ResidentialComponent
},
{
  path:"commercial-services",
  component: CommercialComponent
},
{
  path:"our-work",
  component: WorkComponent
},
{
  path:"contact",
  component: ContactComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
