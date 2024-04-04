
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
 
import { FormsModule } from '@angular/forms';
 
 
 
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
 
  restaurantContactNo: string = '+1234567890';
  restaurantManagerContact: string = '+1234567891';
  receptionPhoneNo: string = '+1234567892';
  restaurantEmail: string = 'restaurant@example.com';
 
  instagramLink: string = 'https://www.instagram.com/restaurant/';
  facebookLink: string = 'https://www.facebook.com/restaurant/';
 
  feedbackName: string = '';
  feedbackPhone: string = '';
  feedbackEmail: string = '';
  feedbackMessage: string = '';
 
  submitFeedback() {
    // Logic to submit feedback
    console.log('Feedback submitted:', this.feedbackName, this.feedbackPhone, this.feedbackEmail, this.feedbackMessage);
  }
}