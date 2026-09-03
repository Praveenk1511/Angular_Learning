import { Component, input, output } from '@angular/core';

import { PlaceType } from './place.model';

@Component({
  selector: 'app-places',
  standalone: true,
  imports: [],
  templateUrl: './places.html',
  styleUrl: './places.css',
})
export class Places {
  places = input.required<PlaceType[]>();
  selectPlace = output<PlaceType>();

  onSelectPlace(place: PlaceType) {
    this.selectPlace.emit(place);
  }
}
