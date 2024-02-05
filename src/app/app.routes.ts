import { Routes } from '@angular/router';
import { FormComponent } from './from/from.component';
import { FilterComponent } from './filter/filter.component';
import { ComponentsComponent } from './components/components.component';
import { ViewUserComponent } from './components/layout/view-user.component';

export const routes: Routes = [
  {
    path:'from',
    component:FormComponent
  },
  {
    path:'filter',
    component:FilterComponent
  },
  {
    path:'user',
    component:ComponentsComponent
  },
  {
    path:'user/:id',
    component:ViewUserComponent
  }
];
