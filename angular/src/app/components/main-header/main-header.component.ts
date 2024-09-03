import { Component } from '@angular/core';
import { DarkModeButtonComponent } from '../dark-mode-button/dark-mode-button.component';
import { RouterLink } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-main-header',
  standalone: true,
  templateUrl: './main-header.component.html',
  imports: [
    DarkModeButtonComponent,
    RouterLink,
    NgOptimizedImage
  ],
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent {
  logoUrl = 'assets/logo.png';

  handleClick() {
    // Your click handler logic
  }
}
