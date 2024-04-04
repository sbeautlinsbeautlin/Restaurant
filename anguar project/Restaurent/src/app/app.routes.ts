import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';

import { PizzaComponent } from './pizza/pizza.component';
import { BurgerComponent } from './burger/burger.component';
import { PastaComponent } from './pasta/pasta.component';
import { TacosComponent } from './tacos/tacos.component';
import { FriesComponent } from './fries/fries.component';
import { DrinksComponent } from './drinks/drinks.component';
import { DessertsComponent } from './desserts/desserts.component';
import { NoodlesComponent } from './noodles/noodles.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
    {path:"home",component:HomeComponent,
    children:[
        {path:"order",component:OrderComponent},
    ]
    },
    {path:"about",component:AboutComponent},
    {path:"contact",component:ContactComponent},
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"menu",component:MenuComponent,children:[
        {path:"pizza",component:PizzaComponent,children:[
            {path:"cart",component:CartComponent},
            {path:"order",component:OrderComponent}
        ]},
        {path:"burger",component:BurgerComponent},
        {path:"pazta",component:PastaComponent},
        {path:"tacos",component:TacosComponent},
        {path:"fries",component:FriesComponent},
        {path:"drinks",component:DrinksComponent},
        {path:"dessert",component:DessertsComponent},
        {path:"noodles",component:NoodlesComponent}
    ]},
    {path:"cart",component:CartComponent},
    {path:"order",component:OrderComponent},
    {path:"reservation",component:FormComponent},
    {path:"pizza",component:PizzaComponent},
        {path:"burger",component:BurgerComponent},
        {path:"pazta",component:PastaComponent},
        {path:"tacos",component:TacosComponent},
        {path:"fries",component:FriesComponent},
        {path:"drinks",component:DrinksComponent},
        {path:"dessert",component:DessertsComponent},
        {path:"noodles",component:NoodlesComponent},
        {path:"cart",component:CartComponent},
        {path:"noodles",component:NoodlesComponent}

];
