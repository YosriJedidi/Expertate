import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PropertyListComponent} from './property-list/property-list.component';
import {CreatePropertyComponent} from './create-property/create-property.component';
import {UpdatePropertyComponent} from './update-property/update-property.component';
import {MyPropertiesComponent} from './my-properties/my-properties.component';
import {PropertyDetailsComponent} from './property-details/property-details.component';

const routes: Routes = [
  {path: 'properties', component: PropertyListComponent},
  {path: 'create-property', component: CreatePropertyComponent},
  {path: '', redirectTo: 'properties', pathMatch: 'full'},
  {path: 'update-property/:id', component: UpdatePropertyComponent},
  {path: 'my-properties', component: MyPropertiesComponent},
  {path: 'property-details/:id', component: PropertyDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
