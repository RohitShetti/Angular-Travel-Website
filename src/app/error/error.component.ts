import { Component } from '@angular/core';

@Component({
  selector: 'app-error',
  standalone: true,
  template: `
    <div class="error-container">
      <h1>404</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <a routerLink="/home" class="home-link">Back to Home</a>
    </div>
  `,
  styles: [`
    .error-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background-color: #f8f9fa; 
      text-align: center;
    }

    h1 {
      font-size: 6rem;
      margin: 0;
      color: #dc3545; 
      font-weight: bold;
    }

    p {
      font-size: 1.5rem;
      color: #6c757d; 
      margin-bottom: 20px;
    }

    .home-link {
      display: inline-block;
      margin-top: 10px;
      padding: 10px 20px;
      color: #fff;
      background-color: #007bff; 
      text-decoration: none;
      border-radius: 5px;
      transition: background-color 0.3s;
    }

    .home-link:hover {
      background-color: #0056b3; 
    }
  `]
})
export class ErrorComponent {}
