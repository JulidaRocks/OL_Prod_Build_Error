import { Component, OnInit } from '@angular/core';
import OlTileLayer from 'ol/layer/Tile';
import OlMap from 'ol/Map';
import OlView from 'ol/View';
import OlOsmSource from 'ol/source/OSM';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-ol';

  ngOnInit() {
    this.initOpenLayerMap();
  }

  initOpenLayerMap() {
    const olview = new OlView({ center: [0, 0], zoom: 2 }),
      baseLayer = new OlTileLayer({ source: new OlOsmSource() }),
      map = new OlMap({
        target: document.getElementById('map'),
        view: olview,
        layers: [baseLayer]
      });
  }
}
