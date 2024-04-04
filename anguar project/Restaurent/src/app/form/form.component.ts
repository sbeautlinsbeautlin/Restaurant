
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
 
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
 
 peopleOptions: number[] = Array.from({length: 10}, (_, i) => i + 1); // Array from 1 to 10
 showPopup: boolean = false;
 constructor() { }
 submitForm() {
   // Logic for form submission
   console.log("Form submitted!");
   // Show the pop-up message
   this.showPopup = true;
  }
}
 