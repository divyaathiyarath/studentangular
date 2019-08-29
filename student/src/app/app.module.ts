import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import{HttpClientModule} from '@angular/common/http';
  import { from } from 'rxjs';
import { NavComponent } from './nav/nav.component';
import {Routes,RouterModule} from '@angular/router';
import { ViewComponent } from './view/view.component';
import { SearchComponent } from './search/search.component';
const appRoutes:Routes=[
  {path:'',component:RegistrationComponent},
  {path:'view',component:ViewComponent},
  {path:'search',component:SearchComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    NavComponent,
    ViewComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent,NavComponent]
})
export class AppModule { }
