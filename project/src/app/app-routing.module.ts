import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './cars/catalog/catalog.component';
import { ContactComponent } from './core/contact/contact.component';
import { HomeComponent } from './core/home/home.component';
import { LoginComponent } from './user/components/login/login.component';
import { RegisterComponent } from './user/components/register/register.component';

const routes: Routes = [
  {path: '',pathMatch: 'full', redirectTo: 'home'},
  {path: 'home',component: HomeComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'login',component: LoginComponent},
  {path: 'contact',component: ContactComponent},
  {
    path: 'catalog',
    children: [
      { path: '', pathMatch: 'full', component: CatalogComponent },
      // { path: 'add', component: AddListingComponent },
      // { path: ':id', component: ListingDetailsComponent },
      // { path: 'search', component: SearchComponent }
  
  ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
