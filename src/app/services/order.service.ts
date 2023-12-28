import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private http: HttpClient) {}

  private baseUrl: string = 'https://orderme.co.in/intellicus-ecom-web-0.0.1-SNAPSHOT/orders/orderStatus';

  sendRequest(data: any): Observable<any> {
    let reqHeader = new HttpHeaders({
      'Custom-Origin': 'custom_user_app',
    });
    let url = `${this.baseUrl}`;
    return this.http.put(url, data, { headers: reqHeader });
  }
}
