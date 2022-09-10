import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreensComponent } from './screens/map-screens/map-screens.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [MapScreensComponent, MapViewComponent, LoadingComponent],
  imports: [CommonModule],
  exports: [MapScreensComponent],
})
export class MapsModule {}
