import { Component } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule, CommonModule, LoginComponent] // Add CommonModule here
})
export class AppComponent {
  title = 'Travel App';
  showNavbar: boolean = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event: Event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
       
        // Check if the current route is either /login or /register
        this.showNavbar = !(
          event.urlAfterRedirects.includes('/login') ||
          event.urlAfterRedirects.includes('/register')
        );
      });
  }
}
