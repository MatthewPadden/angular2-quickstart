// We do not get bootstrap from core as there are multiple ways to render e.g. mobile
import { bootstrap }    from '@angular/platform-browser-dynamic';

// This is our application root component
import { AppComponent } from './app.component';

bootstrap(AppComponent);
