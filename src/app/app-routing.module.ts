import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreateOrderComponent } from './component/create-order/create-order.component';
import { EditOrderComponent } from './component/edit-order/edit-order.component';
import { GetOrderComponent } from './component/get-order/get-order.component';

const routes: Routes = [
  { path: '', redirectTo: 'orders', pathMatch: 'full' },
  { path: 'getorder', component: GetOrderComponent },
  { path: 'editorder/:id', component: EditOrderComponent },
  { path: 'createorder', component: CreateOrderComponent }
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
