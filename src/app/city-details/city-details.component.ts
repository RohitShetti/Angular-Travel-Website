import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CityService } from '../cities/cities.services';
import { City } from '../cities/cities.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-city-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css'],
})
export class CityDetailsComponent implements OnInit {
  city: City | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cityService: CityService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.city = this.cityService.getCityById(id);
  }

  onEdit(): void {
    if (this.city) {
      this.router.navigate([`/edit-city/${this.city.id}`]); // Navigate to edit page
    }
  }

  onDelete(): void {
    if (confirm('Are you sure you want to delete this city?')) {
      if (this.city) {
        this.cityService.deleteCity(this.city.id); // Call the delete method
      }
      alert('City deleted successfully!');
      this.router.navigate(['/cities']); // Redirect to home after deletion
    }
  }

  navigateToCities(): void {
    this.router.navigate(['/cities']); // Navigate to cities component
  }
}
