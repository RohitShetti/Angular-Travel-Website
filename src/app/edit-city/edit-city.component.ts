import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from '../cities/cities.services';
import { City } from '../cities/cities.model';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-city',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.css'],
})
export class EditCityComponent implements OnInit {
  // Holds the city data that will be edited
  city: City | undefined;

  constructor(
    private route: ActivatedRoute,
    private cityService: CityService,
    private router: Router
  ) {}

  // Lifecycle hook that is called after the component is initialized
  ngOnInit(): void {
    // Get the city ID from the route parameters
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Fetch the city data by ID from the city service
    this.city = this.cityService.getCityById(id);
  }

  // Method to save the updated city data
  onSave(form: NgForm): void {
    // Check if the form is valid and the city is defined
    if (form.valid && this.city) {
      this.cityService.updateCity(this.city);

      alert('City data updated successfully!');

      this.router.navigate(['/cities']);
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }
}
