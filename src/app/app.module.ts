import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {routingComponents , AppRoutingModule} from './app-routing.module';
import { ThirdpageComponent } from './thirdpage/thirdpage.component';
import { FourthpageComponent } from './fourthpage/fourthpage.component'

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ThirdpageComponent,
    FourthpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
