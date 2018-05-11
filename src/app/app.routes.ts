import { CoInsuranceComponent } from './common/component/co-insurance/co-insurance.component';
import { CostShareSetUpComponent } from './common/component/cost-share-set-up/cost-share-set-up.component';
import { CostShareComponent } from './cost-share/cost-share.component';
import {  Routes } from '@angular/router';

export const ROUTES: Routes = [
    { path: 'cost-share',
      component: CostShareComponent,
      children:[
        {path:'',component:CostShareSetUpComponent},
        {path:'co-insurance',component:CoInsuranceComponent}
      ]
    },
    { path:'',redirectTo: '/cost-share',pathMatch: 'full'},
    { path:'**',redirectTo: '/cost-share',pathMatch: 'full'}
  ];