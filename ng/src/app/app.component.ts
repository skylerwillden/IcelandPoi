import { Component, ViewChild, OnInit } from '@angular/core';
import {} from 'googlemaps';
import { Location } from 'src/app/models/location';
import { Observable } from 'rxjs';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IcelandPoi'
  locations$ : Observable<Location[]>

  constructor(private LocationService : LocationService){}

   @ViewChild('map', {static: true }) mapElement: any;
  map: google.maps.Map;

  ngOnInit(): void {

    let markers : Object[]
    let count = 0

    const mapProperties = {
      center: new google.maps.LatLng(65, -19),
      zoom: 6.85,
      mapTypeId: google.maps.MapTypeId.ROADMAP
 };
 this.map = new google.maps.Map(this.mapElement.nativeElement,    mapProperties);

    this.locations$ = this.LocationService.getLocations()

    this.locations$.subscribe(value  => {
      for (let location of value){
        let temp = location.position.lat;
        let temp2 = location.position.lng;
         let marker = new google.maps.Marker({
            position: {lat: temp, lng: temp2},
            map: this.map,
            title: location.title
       })
      }
    }, error  => {
      console.log(error)
    })
    
 }
}
