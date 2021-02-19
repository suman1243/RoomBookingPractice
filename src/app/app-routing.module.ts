import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { RentPropertyComponent } from './property/rent-property/rent-property.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';

const routes: Routes = [
  { path: '', component: PropertyListComponent },
  { path: 'rent-property', component: RentPropertyComponent },
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'property-detail/:id', component: PropertyDetailComponent },
  { path: 'user/login', component: UserLoginComponent },
  { path: 'user/registration', component: UserRegistrationComponent },
  { path: '**', component: PropertyListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
