import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    // Initialize the form with controls and validators
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required], // Name is required
      email: ['', [Validators.required, Validators.email]], // Email must be valid
      message: ['', [Validators.required, Validators.minLength(10)]], // Min 10 characters
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form Data:', this.contactForm.value);
      alert('Message Sent Successfully!');
      this.contactForm.reset();
    } else {
      alert('Please fill out all fields correctly.');
    }
  }
}
