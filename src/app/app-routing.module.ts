import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderStatusComponent } from './components/order-status/order-status.component';
import { LoginComponent } from './components/login/login.component';
import { TestingComponent } from './testing/testing.component';
import { NewTestComponent } from './new-test/new-test.component';

const routes: Routes = [
  // {path:'',component:LoginComponent,pathMatch:'full'},
  {path:'',component:OrderStatusComponent,pathMatch:'full'},
  // {path:'testing',component:NewTestComponent,pathMatch:'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
