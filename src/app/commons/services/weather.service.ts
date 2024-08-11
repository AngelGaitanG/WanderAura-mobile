import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Geolocation } from '@capacitor/geolocation';
import { GeoResponse } from '../interfaces/GeoResponse.interface';

@Injectable({
  providedIn: 'root'  
})
export class WeatherService {
  coordinates: GeoResponse | null = null
  constructor(private http: HttpClient) { }

 printCurrentPosition = async () => {
  this.coordinates = (await Geolocation.getCurrentPosition()).coords;

  console.log('Current position:', this.coordinates);
};

  async getWeatherData(): Promise<Observable<any>> {
    await this.printCurrentPosition();
    let lat = this.coordinates?.latitude;
    let lon = this.coordinates?.longitude;
    let exclude = 'minutely,hourly,alerts';
    let apiId = '41ae083203c7c4b9589aaf04c09f6e7d';
    let queryString = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${apiId}`;
    return this.http.get(queryString);
  }
}
