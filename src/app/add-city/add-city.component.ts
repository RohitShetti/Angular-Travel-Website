import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CityService } from '../cities/cities.services';
import { City } from '../cities/cities.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-city',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css'],
})
export class AddCityComponent {
  newCity: City = {
    id: 0,
    description: '',
    placesToSee: [],
    rating: 0,
    image: '',
    category: '',
    cost: 0,
  };

  // Temporary string to hold the comma-separated places
  placesToSeeInput: string = '';

  constructor(private cityService: CityService, private router: Router) {}

  addCity() {
    // Check if all fields are populated
    if (
      this.newCity.description &&
      this.placesToSeeInput &&
      this.newCity.rating >= 0 &&
      this.newCity.image &&
      this.newCity.category &&
      this.newCity.cost >= 0
    ) {
      // Generate an ID based on the existing cities' length
      this.newCity.id = this.cityService.getCities().length + 1;

      // Convert the 'placesToSeeInput' string to an array by splitting by commas
      this.newCity.placesToSee = this.placesToSeeInput.split(',').map(place => place.trim());

      // Add the new city using the city service
      this.cityService.addCity(this.newCity);

      // Navigate back to the cities component
      this.router.navigate(['/cities']);
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }
}




