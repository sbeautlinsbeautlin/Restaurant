import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
     
  


  private apiUrl = 'http://localhost:9999/carts';

  constructor(private http: HttpClient) { }

  addToCart(name: string, image: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add`, { name, image });
  }
}
