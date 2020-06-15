import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

  currentOrder = null;
  message = '';
  angForm: FormGroup;
  product : any ={}
  constructor(
    private orderService : OrdersService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
    ) { 
      this.createFormGroup()
    }

  ngOnInit(){
    //this.getOrder(this.route.snapshot.paramMap.get('id'))
    this.route.params.subscribe(params => {
      this.orderService.get(params['id'])
        .subscribe(res => {
          this.product = res[0];
          console.log(res[0]);
      });
    });
  }

  createFormGroup() {
    this.angForm = this.fb.group({
      OrderId: ['', Validators.required],
      ProductId: ['', Validators.required ],
      ProductName: ['', Validators.required ],
      OrderQuantity: ['', Validators.required ],
      OrderPrice: ['', Validators.required ]
    });
  }
  /* getOrder(id) {
    this.orderService.get(id)
      .subscribe(
        data => {
          this.currentOrder = data[0];
          console.log(data[0]);
        },
        error => {
          console.log(error);
        });
  } */

  updateOrder(orderId,productId,productName,orderQuantity,orderPrice) {
    const updateOrderRequest = {
      orderId: orderId,
      productId: productId,
      productName: productName,
      orderQuantity: orderQuantity,
      orderPrice: orderPrice
    };
    this.orderService.update(orderId, updateOrderRequest)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/getorder']);
        },
        error => {
          console.log(error);
        });
  }

  

}
