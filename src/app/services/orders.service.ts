import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/services/authentication.service';

const baseUrl = 'http://order-management-git-myproject.apps.awsopenshift.ne-innovation.com/api/v1/orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  getAll() {
    return this.http.get(`${baseUrl}/getAllOrders`,{
      headers: { Authorization: `Bearer ${this.auth.getToken()}` }
    });
  }

  get(id) {
    return this.http.get(`${baseUrl}/getAOrders/${id}`,{
      headers: { Authorization: `Bearer ${this.auth.getToken()}` }
    });
  }

  create(data) {
    console.log("datata=",data);
    return this.http.post(`${baseUrl}/createOrder`, data,{
      headers: { Authorization: `Bearer ${this.auth.getToken()}` }
    });
  }

  update(orderId, data) {
    return this.http.put(`${baseUrl}/updateOrder/${orderId}`, data,{
      headers: { Authorization: `Bearer ${this.auth.getToken()}` }
    });
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/deleteOrder/${id}`,{
      headers: { Authorization: `Bearer ${this.auth.getToken()}` }
    });
  }

  deleteAll() {
    return this.http.delete(`${baseUrl}/deleteAllOrders`,
    {
      headers: { Authorization: `Bearer ${this.auth.getToken()}` }
    });
  }

  findById(orderId) {
    return this.http.get(`${baseUrl}/${orderId}`,{
      headers: { Authorization: `Bearer ${this.auth.getToken()}` }
    });
  }

}
