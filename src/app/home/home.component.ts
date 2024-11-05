import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router
import { RouterModule } from '@angular/router'; // Import RouterModule for standalone components
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,MatSlideToggleModule], // Include RouterModule for navigation
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'], // Fixed typo (was 'styleUrl')
})
export class HomeComponent {
  title: string = "Welcome to Travel App";

  constructor(private router: Router) {} // Inject the Router

  // Method to navigate to the 'cities' route
  navigateToCities() {
    this.router.navigate(['/about-us']);
  }
}
