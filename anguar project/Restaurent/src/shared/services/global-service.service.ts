import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
    cartUrl="http://localhost:9999/carts";


  constructor(private _http:HttpClient) { }

  getCart(){
    return this._http.get(this.cartUrl);
  }
}
