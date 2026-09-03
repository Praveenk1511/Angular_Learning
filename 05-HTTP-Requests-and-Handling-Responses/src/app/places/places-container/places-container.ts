import { Component, input } from '@angular/core';

@Component({
  selector: 'app-places-container',
  standalone: true,
  imports: [],
  templateUrl: './places-container.html',
  styleUrl: './places-container.css'
})
export class PlacesContainer {
  title = input.required<string>();
}
