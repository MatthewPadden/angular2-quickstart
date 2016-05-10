// References thing we need. Here we import the Angular Component decorator function from @angular/core because we need it to define our component.
import { Component } from '@angular/core';

// Decorator that tells Angular what template to use and how to create the component
@Component({
  selector: 'my-app', // CSS selector that represents the component
  template: '<h1>My First Angular 2 App</h1>' // The component's template
})
export class AppComponent {
  /*
    This is the root of the application, by convention we name this AppComponent.
    We export this class so we can import it elsewhere.
  */
}
