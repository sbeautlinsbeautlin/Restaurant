import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { PizzaComponent } from './pizza/pizza.component';
import { BurgerComponent } from './burger/burger.component';
import { PastaComponent } from './pasta/pasta.component';
import { TacosComponent } from './tacos/tacos.component';
import { DrinksComponent } from './drinks/drinks.component';
import { DessertsComponent } from './desserts/desserts.component';
import { NoodlesComponent } from './noodles/noodles.component';
import { FriesComponent } from './fries/fries.component';
import { CartComponent } from './cart/cart.component'
import { OrderComponent } from './order/order.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavComponent,PizzaComponent,BurgerComponent,PastaComponent,TacosComponent,DrinksComponent,DessertsComponent,NoodlesComponent,FriesComponent,CartComponent,OrderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'restaurant';
}
