import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PizzaComponent } from '../pizza/pizza.component';
import { BurgerComponent } from '../burger/burger.component';
import { TacosComponent } from '../tacos/tacos.component';
import { PastaComponent } from '../pasta/pasta.component';
import { DrinksComponent } from '../drinks/drinks.component';
import { NoodlesComponent } from '../noodles/noodles.component';
import { DessertsComponent } from '../desserts/desserts.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink,PizzaComponent,BurgerComponent,TacosComponent,PastaComponent,DrinksComponent,NoodlesComponent,DessertsComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
