import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(): Observable<any> {
    let lat = -33.302172;
    let lon = -66.336835;
    let exclude = 'minutely,hourly,alerts';
    let apiId = '41ae083203c7c4b9589aaf04c09f6e7d';
    let queryString = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${apiId}`;
    return this.http.get(queryString);
  }
}
