import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-mode-button',
  templateUrl: './dark-mode-button.component.html',
  standalone: true,
  styleUrls: ['./dark-mode-button.component.css']
})
export class DarkModeButtonComponent implements OnInit {
  isDark = false;

  ngOnInit() {
    if (typeof window !== 'undefined' && window.localStorage) {
      // Retrieve the dark mode preference from localStorage on initialization
      this.isDark = localStorage.getItem('darkMode') === 'true';
      document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
    }
  }

  toggleTheme() {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.isDark = !this.isDark;
      document.documentElement.setAttribute('data-theme', this.isDark ? 'dark' : 'light');
      localStorage.setItem('darkMode', this.isDark.toString()); // Save the preference to localStorage
      console.log('Dark mode toggled:', this.isDark);
    }
  }
}
