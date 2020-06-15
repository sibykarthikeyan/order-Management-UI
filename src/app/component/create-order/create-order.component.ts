import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  /* order = {
    productId: '',
    productName: '',
    orderQuantity: '',
    orderPrice: ''
  }; */
  angForm : FormGroup;

  constructor(
    private orderService : OrdersService,
    private router: Router,
    private fb: FormBuilder
     ) 
    {
      this.createFormGroup()
    }

    createFormGroup() {
      this.angForm = this.fb.group({
        ProductId: ['', Validators.required ],
        ProductName: ['', Validators.required ],
        OrderQuantity: ['', Validators.required ],
        OrderPrice: ['', Validators.required ]
      });
    }
  ngOnInit() {
  }

  saveOrder(productId,productName,orderQuantity,orderPrice) {
    const data = {
      productId: productId,
      productName: productName,
      orderQuantity: orderQuantity,
      orderPrice: orderPrice
    };

    this.orderService.create(data)
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
