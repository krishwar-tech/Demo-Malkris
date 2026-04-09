import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  formData = {
    fname: '',
    lname: '',
    email: '',
    company: '',
    interest: '',
    message: ''
  };

  submitted = false;

  // ✅ FIXED — INSIDE CLASS
  openCalendly() {
    const calendly = (window as any).Calendly;

    if (calendly) {
      calendly.initPopupWidget({
        url: 'https://calendly.com/malkrispvtltd/30min'
      });
    } else {
      alert('Calendly not loaded. Please refresh.');
    }
  }

  submitForm() {
    if (!this.formData.fname || !this.formData.email) {
      alert('Please fill required fields');
      return;
    }

    console.log('Form Data:', this.formData);

    this.submitted = true;

    this.formData = {
      fname: '',
      lname: '',
      email: '',
      company: '',
      interest: '',
      message: ''
    };

    setTimeout(() => {
      this.submitted = false;
    }, 4000);
  }
}