import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../../services/places.service';

@Component({
  selector: 'app-map-screens',
  templateUrl: './map-screens.component.html',
  styleUrls: ['./map-screens.component.css'],
})
export class MapScreensComponent implements OnInit {
  constructor(private placesService: PlacesService) {}

  ngOnInit(): void {}
}
