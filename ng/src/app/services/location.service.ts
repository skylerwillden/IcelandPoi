import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'
import { Location } from '../models/location';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient} from '@angular/common/http'

const httpHeaders =  {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable()
export class LocationService {
    locationsUrl = "/api/locations"

    constructor(private http: HttpClient){}

    getLocations(): Observable<Location[]>{
        return this.http.get<Location[]>(this.locationsUrl)
    }

}