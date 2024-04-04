import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-tacos',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './tacos.component.html',
  styleUrl: './tacos.component.css'
})
export class TacosComponent {
  constructor(private http: HttpClient){}
  selectedItem:any;
  topItems = [
    { title: 'chicken Fajita', image: '../../assets/t111.png', description: '“Experience our Chicken Pizza, with succulent chicken toppings on a flavorful crust, priced at $13.99.”', showDescription: false, id:"25" },
    { title: 'Pork-Trouble pizza', image: '../../assets/t22.png', description: '“Enjoy our Veg Pork Pizza with savory mock pork and fresh veggies on a crispy crust for just $12.99.”', showDescription: false , id:"26"},
    { title: 'Mutton Pizza', image: '../../assets/t3.png', description: '“Indulge in our Mutton Pizza, featuring tender mutton toppings on a savory crust, priced at $15.99.”', showDescription: false , id:"27"}
  ];
 
  bottomItems = [
    { title: 'Mushroom Pizza', image: '../../assets/t11.png', description: '“Delight in our Mushroom Pizza, featuring savory mushrooms atop a crispy crust, priced at $11.99.”', showDescription: false, id:"28" },
    { title: 'veg corn pizza', image: '../../assets/t44.png', description: '““Savor our Veg Corn Pizza, bursting with fresh vegetables and sweet corn on a crispy crust, priced at $10.99.”.”', showDescription: false, id:"29" },
    { title: 'Avocado Pizza', image: '../../assets/t5.png', description: '“Savor our Avocado Pizza, topped with creamy slices of avocado on a thin crust, priced at $14.99.”', showDescription: false , id:"30"}
  ];
 
  toggleDescription(item: any) {
    item.showDescription = !item.showDescription;
  }
  add(event: MouseEvent) {
    // Access the parent node of the clicked element
    const parentNode = (event.target as HTMLElement).parentNode?.querySelector("p")?.innerHTML;
    const url = 'http://localhost:3000/add'; // Replace with your API endpoint
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
          // Handle response as needed
        },
        (error) => {
          console.error('POST request failed: ', error);
          // Handle error as needed
        }
      );
    
}

}
