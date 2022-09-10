import { Component } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-map-screens',
  templateUrl: './map-screens.component.html',
  styleUrls: ['./map-screens.component.css'],
})
export class MapScreensComponent {
  constructor(private placesService: PlacesService) {}

  get isUserLocationReady() {
    return this.placesService.isUserLocationReady;
  }
}
