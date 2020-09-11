import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreateOrderComponent } from './component/create-order/create-order.component';
import { EditOrderComponent } from './component/edit-order/edit-order.component';
import { GetOrderComponent } from './component/get-order/get-order.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ProfileComponent } from './component/profile/profile.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'orders', pathMatch: 'full',canActivate: [AuthGuard] },
  { path: 'api/getorder', component: GetOrderComponent },
  { path: 'api/editorder/:id', component: EditOrderComponent },
  { path: 'api/createorder', component: CreateOrderComponent },
  { path: "api/login", component: LoginComponent },
  { path: "api/register", component: RegisterComponent },
  { path: "api/profile", component: ProfileComponent, canActivate: [AuthGuard] }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
