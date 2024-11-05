import { Component, Input } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-city-rating',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule], // Add CommonModule here
  templateUrl: './city-rating.component.html',
  styleUrls: ['./city-rating.component.css']
})
export class CityRatingComponent {
  @Input() rating: number = 0; // Input property to receive the rating
  faStar = faStar; // FontAwesome star icon
  stars: number[] = [1, 2, 3, 4, 5]; // Array to represent stars

  // Handle star click and update rating
  onClick(selectedRating: number): void {
    this.rating = selectedRating;
  }

  // CSS class based on the rating value
  getRatingClass(): string {
    if (this.rating >= 4) {
      return 'text-success'; // Green color for rating 4 and 5
    } else if (this.rating === 3) {
      return 'text-warning'; // Orange color for rating 3
    } else {
      return 'text-danger'; // Red color for rating 2 and below
    }
  }
}
