import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router
import { City } from './cities.model';
import { CityService } from './cities.services';
import { CityServiceObs } from './city.serviceobs';
import { CityRatingComponent } from '../city-rating/city-rating.component';
import { Subscription } from 'rxjs'; 

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [CommonModule, FormsModule, CityRatingComponent],
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
})
export class CitiesComponent implements OnInit, OnDestroy {
  cities: City[] = [];
  filteredCities: City[] = [];
  selectedFilter: string = 'All';
  searchTerm: string = '';
  allImagesVisible: boolean = false;
  showImage: boolean[] = [];
  private citiesSubscription!: Subscription; 

  constructor(private cityService: CityService, private cityServiceObs: CityServiceObs,  private router: Router) {} // Inject Router

  ngOnInit(): void {
    // Fetch all cities and initialize filtered list and image visibility.

      this.citiesSubscription = this.cityServiceObs.getCities().subscribe({
      next: (cities) => {
        this.cities = cities; // Assign cities from the observable
        this.showImage = this.cities.map(() => false);
        
     
      },
      error: (err) => {
        console.error('Failed to load cities', err);
      },
    });
    this.cities = this.cityService.getCities();
    this.filteredCities = this.filterCities();
    this.showImage = this.cities.map(() => false);
  }

  ngOnDestroy(): void {
    console.log('CitiesComponent Destroyed');
  }

  // Toggle visibility of all images.
  toggleAllImages(): void {
    this.allImagesVisible = !this.allImagesVisible;
    this.showImage = this.showImage.map(() => this.allImagesVisible);
  }

  // Update the selected filter based on user input.
  updateFilter(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedFilter = target.value || 'All';
    this.filteredCities = this.filterCities();
  }

  // Update the city list based on search term.
  onSearchChange(): void {
    this.filteredCities = this.filterCities();
  }

  // Filter cities based on category and search term.
  filterCities(): City[] {
    const filteredByCategory =
      this.selectedFilter === 'All'
        ? this.cities
        : this.cities.filter((city) => city.category === this.selectedFilter);

    return filteredByCategory.filter((city) =>
      city.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Navigate to the city details page using the city ID.
  viewCityDetails(id: number): void {
    this.router.navigate(['/city-details', id]); // Navigate with city ID as parameter
  }

  // Example rating click event.
  onRatingClicked(rate: number): void {
    alert(`Rating clicked: ${rate}`);
  }

  //Adding a new city
  addCity() {
    this.router.navigate(['/add-city']); // Navigate to AddCityComponent
  }
} 


// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { Router } from '@angular/router'; 
// import { City } from './cities.model';
// import { CityServiceObs } from './city.serviceobs';
// import { CityService } from './cities.services';
// import { CityRatingComponent } from '../city-rating/city-rating.component';
// import { Subscription } from 'rxjs'; 

// @Component({
//   selector: 'app-cities',
//   standalone: true,
//   imports: [CommonModule, FormsModule, CityRatingComponent],
//   templateUrl: './cities.component.html',
//   styleUrls: ['./cities.component.css'],
// })
// export class CitiesComponent implements OnInit, OnDestroy {
//   cities: City[] = [];
//   filteredCities: City[] = [];
//   selectedFilter: string = 'All';
//   searchTerm: string = '';
//   allImagesVisible: boolean = false;
//   showImage: boolean[] = [];
//   private citiesSubscription!: Subscription; // Subscription to manage observable

//   constructor(private cityServiceObs: CityServiceObs, private cityService: CityService,  private router: Router) {} // Injecting observable service

//   ngOnInit(): void {
//     // Fetch all cities using observable
//     this.citiesSubscription = this.cityServiceObs.getCities().subscribe({
//       next: (cities) => {
//         this.cities = cities; // Assign cities from the observable
//         this.filteredCities = this.filterCities();
//         this.showImage = this.cities.map(() => false);
//       },
//       error: (err) => {
//         console.error('Failed to load cities', err);
//       },
//     });
//   }

//   ngOnDestroy(): void {
//     console.log('CitiesComponent Destroyed');
//     this.citiesSubscription.unsubscribe(); // Clean up subscription
//   }

//   // Toggle visibility of all images.
//   toggleAllImages(): void {
//     this.allImagesVisible = !this.allImagesVisible;
//     this.showImage = this.showImage.map(() => this.allImagesVisible);
//   }

//   // Update the selected filter based on user input.
//   updateFilter(event: Event): void {
//     const target = event.target as HTMLSelectElement;
//     this.selectedFilter = target.value || 'All';
//     this.filteredCities = this.filterCities();
//   }

//   // Update the city list based on search term.
//   onSearchChange(): void {
//     this.filteredCities = this.filterCities();
//   }

//   // Filter cities based on category and search term.
//   filterCities(): City[] {
//     const filteredByCategory =
//       this.selectedFilter === 'All'
//         ? this.cities
//         : this.cities.filter((city) => city.category === this.selectedFilter);

//     return filteredByCategory.filter((city) =>
//       city.description.toLowerCase().includes(this.searchTerm.toLowerCase())
//     );
//   }

//   // Navigate to the city details page using the city ID.
//   viewCityDetails(id: number): void {
//     this.router.navigate(['/city-details', id]); // Navigate with city ID as parameter
//   }

//   // Example rating click event.
//   onRatingClicked(rate: number): void {
//     alert(`Rating clicked: ${rate}`);
//   }

//   // Adding a new city
//   addCity() {
//     this.router.navigate(['/add-city']); // Navigate to AddCityComponent
//   }
// }



//1st code only


// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { Router } from '@angular/router'; // Import Router
// import { City } from './cities.model';
// import { CityService } from './cities.services';
// import { CityRatingComponent } from '../city-rating/city-rating.component';

// @Component({
//   selector: 'app-cities',
//   standalone: true,
//   imports: [CommonModule, FormsModule, CityRatingComponent],
//   templateUrl: './cities.component.html',
//   styleUrls: ['./cities.component.css'],
// })
// export class CitiesComponent implements OnInit, OnDestroy {
//   cities: City[] = [];
//   filteredCities: City[] = [];
//   selectedFilter: string = 'All';
//   searchTerm: string = '';
//   allImagesVisible: boolean = false;
//   showImage: boolean[] = [];

//   constructor(private cityService: CityService, private router: Router) {} // Inject Router

//   ngOnInit(): void {
//     // Fetch all cities and initialize filtered list and image visibility.
//     this.cities = this.cityService.getCities();
//     this.filteredCities = this.filterCities();
//     this.showImage = this.cities.map(() => false);
//   }

//   ngOnDestroy(): void {
//     console.log('CitiesComponent Destroyed');
//   }

//   // Toggle visibility of all images.
//   toggleAllImages(): void {
//     this.allImagesVisible = !this.allImagesVisible;
//     this.showImage = this.showImage.map(() => this.allImagesVisible);
//   }

//   // Update the selected filter based on user input.
//   updateFilter(event: Event): void {
//     const target = event.target as HTMLSelectElement;
//     this.selectedFilter = target.value || 'All';
//     this.filteredCities = this.filterCities();
//   }

//   // Update the city list based on search term.
//   onSearchChange(): void {
//     this.filteredCities = this.filterCities();
//   }

//   // Filter cities based on category and search term.
//   filterCities(): City[] {
//     const filteredByCategory =
//       this.selectedFilter === 'All'
//         ? this.cities
//         : this.cities.filter((city) => city.category === this.selectedFilter);

//     return filteredByCategory.filter((city) =>
//       city.description.toLowerCase().includes(this.searchTerm.toLowerCase())
//     );
//   }

//   // Navigate to the city details page using the city ID.
//   viewCityDetails(id: number): void {
//     this.router.navigate(['/city-details', id]); // Navigate with city ID as parameter
//   }

//   // Example rating click event.
//   onRatingClicked(rate: number): void {
//     alert(`Rating clicked: ${rate}`);
//   }

//   //Adding a new city
//   addCity() {
//     this.router.navigate(['/add-city']); // Navigate to AddCityComponent
//   }
// } 