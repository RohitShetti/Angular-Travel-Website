import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CitiesComponent } from './cities/cities.component';
import { ErrorComponent } from './error/error.component';
import { BookingComponent } from './booking/booking.component';
import { RegisterComponent } from './register/register.component';
import { CityDetailsComponent } from './city-details/city-details.component';
import { EditCityComponent } from './edit-city/edit-city.component';
import { AddCityComponent } from './add-city/add-city.component';
import { LoginComponent } from './login/login.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'contact-us', component: ContactusComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'booking', component: BookingComponent},
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'cities/:id/edit', component:EditCityComponent},
  { path: 'city-details/:id', component: CityDetailsComponent },
  { path: 'register', component: RegisterComponent}, 
  { path: 'edit-city/:id', component: EditCityComponent },
  { path: 'add-city', component: AddCityComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login by default
  {path: 'login', component: LoginComponent},
  { path: '**', component: ErrorComponent }

];
