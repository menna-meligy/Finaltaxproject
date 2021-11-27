import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './home/home.component'
import {FirstpageComponent} from './firstpage/firstpage.component'
import {SecondpageComponent} from './secondpage/secondpage.component'
import { ThirdpageComponent } from './thirdpage/thirdpage.component'
import {FourthpageComponent} from './fourthpage/fourthpage.component'
const routes: Routes = [

{
  path:'first' , component:FirstpageComponent
},
{
  path:'second' , component:SecondpageComponent
},
{
  path:'third' , component:ThirdpageComponent
},
{
  path:'fourth' , component:FourthpageComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FirstpageComponent,SecondpageComponent ,HomeComponent , ThirdpageComponent];
