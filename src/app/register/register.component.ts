import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [CommonModule, FormsModule], // Import FormsModule for template-driven forms
})
export class RegisterComponent {
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    destination: '',
  };

  // Inject Router in the constructor
  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Data:', form.value);
      alert('Registration successful!');

      // Navigate to the home component
      this.router.navigate(['/home']); //Redirect to home
      
      form.reset(); // Reset the form after submission
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
