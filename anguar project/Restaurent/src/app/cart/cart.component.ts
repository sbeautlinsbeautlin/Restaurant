
import { Component, Renderer2, ElementRef }from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';

 
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
        cartArray: any[] = [];  
        total: number=0;
 
         constructor(private http: HttpClient,private renderer: Renderer2, private el: ElementRef){}
         
         ngOnInit()
         {
          this.getCartData();
         }
         getCartData() {
          this.http.get<any>('http://localhost:3000/cart').subscribe(
            (data) => {
              for (const key in data) {
                if (data.hasOwnProperty(key)) {
                  const item = data[key];
                  // Check if isEnabled property is true
                  console.log(item.isEnable)
                  if (item.isEnable) {
                    // Push the item to the cartArray
                    this.cartArray.push(item);
                    this.total+=item.price
                  }
                }
              }
            },
            (error) => {
              console.error('Error fetching cart data:', error);
            }
          );
          console.log(this.cartArray)
        }
  remove(event: MouseEvent){
    const parentNode = (event.target as HTMLElement).parentNode?.querySelector("#uId")?.innerHTML;
  
    // Find the element with the ID "amount" within the parent node
    const amountElement = (event.target as HTMLElement).parentNode?.querySelector("#amount");

    // Check if the amountElement is found and has innerHTML
    if (amountElement && amountElement.innerHTML) {
        // Parse the innerHTML to a number and deduct it from this.total
        const deductedAmount = parseInt(amountElement.innerHTML);
        this.total -= deductedAmount;

        // Debug log the deducted amount and the updated total
        console.log("Deducted amount:", deductedAmount);
        console.log("Updated total:", this.total);
    } else {
        console.error("Error: Unable to deduct amount. Element not found or innerHTML is empty.");
    }
    const url = 'http://localhost:3000/remove'; // Replace with your API endpoint
    const body = {
      id: parentNode
    };
    console.log(parentNode)
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.http.post(url, body, options)
      .subscribe(
        (response) => {
          console.log('POST request successful: ', response);
          
        },
        (error) => {
          console.error('POST request failed: ', error);
          // Handle error as needed
        }
      );
      const targetElement = event.target as HTMLElement;
    // Get the parent element and delete it
    const parentElement = targetElement.parentElement?.parentElement;
    if (parentElement) {
      parentElement.remove();
    }

    }
}