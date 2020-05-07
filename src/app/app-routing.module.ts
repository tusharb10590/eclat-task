import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GFormsComponent } from './components/g-forms/g-forms.component';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'forms',
    component:GFormsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
