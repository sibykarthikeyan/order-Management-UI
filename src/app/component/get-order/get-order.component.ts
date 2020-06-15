import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-get-order',
  templateUrl: './get-order.component.html',
  styleUrls: ['./get-order.component.css']
})
export class GetOrderComponent implements OnInit {

  orders: any;
  orderId: '';
  currentOrder: null;
  currentIndex: -1;
  productId: '';
  productName: '';
  orderQuantity: '';
  orderPrice: '';

  constructor(private orderService: OrdersService,
    private route: ActivatedRoute,
    private router: Router 
    ) {}

  ngOnInit(): void {
    this.retrieveOrders();
  }

  retrieveOrders() {
    this.orderService.getAll()
      .subscribe(
        res => {
          this.orders = res;
          console.log(res);
        },
        error => {
          console.log(error);
        });
  }

  searchOrder() {
    this.orderService.findById(this.orderId)
      .subscribe(
        res => {
          this.orders = res;
          console.log(res);
        },
        error => {
          console.log(error);
        });
  }

 /*  refreshList() {
    this.retrieveOrders();
    this.currentOrder = null;
    this.currentIndex = -1;
  }

  setActiveOrder(order, index) {
    this.currentOrder = order;
    this.currentIndex = index;
  } */

  deleteOrder(orderId,id) {
    console.log("order===",orderId,"---id--",id);
    this.orderService.delete(orderId)
      .subscribe(
        response => {
          console.log(response);
          this.orders.splice(id,1);
        },
        error => {
          console.log(error);
        });
  }

}
