import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MainHeaderComponent} from "../../components/main-header/main-header.component";

@Component({
  selector: 'app-home-layout',
  standalone: true,
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css'],
  imports: [RouterOutlet, MainHeaderComponent]
})
export class HomeLayoutComponent {
}
