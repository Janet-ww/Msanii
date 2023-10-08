
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Make this service a singleton available throughout the app
})
export class ScrollService {
  // JavaScript function to scroll to the top of the page
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
