import { Routes } from '@angular/router';
import { FormComponent } from './from/from.component';
import { FilterComponent } from './filter/filter.component';
import { ComponentsComponent } from './components/components.component';

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
  }
];
