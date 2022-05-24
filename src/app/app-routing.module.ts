import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { ProfileComponentComponent } from './Components/profile-component/profile-component.component';
import { RegisterComponent } from './Components/register/register.component';

const routes: Routes = [
  {path:"login" , component:LoginComponent},
  {path:"register" , component:RegisterComponent},
  {path:"profile",component:ProfileComponentComponent},
  {path:" ",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
