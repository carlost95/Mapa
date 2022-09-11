import { Component } from '@angular/core';
import { MapService } from '../../services/map.service';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-btn-my-location',
  templateUrl: './btn-my-location.component.html',
  styleUrls: ['./btn-my-location.component.css'],
})
export class BtnMyLocationComponent {
  constructor(
    private mapService: MapService,
    private placesServices: PlacesService
  ) {}
  goToMyLocation() {
    if (!this.placesServices.isUserLocationReady)
      throw new Error('No hay ubicacion del usuario');
    if (!this.mapService.isMapReady) throw new Error('No hay maapa disponible');

    this.mapService.flyTo(this.placesServices.userLocation!);
  }
}
