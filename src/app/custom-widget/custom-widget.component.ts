import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-custom-widget',
  templateUrl: './custom-widget.component.html',
  styleUrl: './custom-widget.component.scss',
})
export class CustomWidgetComponent implements AfterViewInit {
  private map: L.Map | undefined;
  private initMap(): void {
    this.map = L.map('map', {
      center: [51.505, -0.09], // Initial map center coordinates
      zoom: 13,
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: `Map data © <a href="https://www.openstreetmap.org/
  copyright">OpenStreetMap</a> contributors`,
    }).addTo(this.map);
  }
  ngAfterViewInit(): void {
    this.initMap();
  }
}
