// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { BookingComponent } from './booking.component';

// describe('BookingComponent', () => {
//   let component: BookingComponent;
//   let fixture: ComponentFixture<BookingComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [BookingComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(BookingComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { BookingComponent } from './booking.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;
  let debugElement: DebugElement;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookingComponent],
      imports: [RouterTestingModule] // Import RouterTestingModule for navigation
    }).compileComponents();

    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    router = TestBed.inject(Router);

    fixture.detectChanges(); // Trigger initial data binding
  });

  it('should render the title "Discover Your Next Adventure"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Discover Your Next Adventure');
  });

  it('should navigate to the cities page when "Start Your Journey" button is clicked', () => {
    spyOn(router, 'navigate'); // Spy on the router's navigate method
    const button = debugElement.query(By.css('.start-btn')).nativeElement;
    button.click(); // Simulate button click
    expect(router.navigate).toHaveBeenCalledWith(['/cities']); // Check if navigation happened to '/cities'
  });
});

