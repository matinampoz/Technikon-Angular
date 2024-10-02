import { Routes } from '@angular/router';
import { AddOwnerFormComponent } from './add-owner-form/add-owner-form.component';
import { FileNotFoundComponent } from './file-not-found/file-not-found.component';
import { HomeComponent } from './home/home.component';
import { OwnerComponent } from './owner/owner.component';

export const routes: Routes = [
    {path: 'home', component:HomeComponent},
    {path: 'add', component: AddOwnerFormComponent},
    {path: 'owner/1', component: OwnerComponent},
    {path: 'owner/propertyOwners', component: OwnerComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**',component: FileNotFoundComponent}
  ];
