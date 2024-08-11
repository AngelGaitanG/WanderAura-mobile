import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonCol, IonRow, IonRefresher, IonRefresherContent } from '@ionic/angular/standalone';
import { WeatherService } from 'src/app/core/services/weather.service';
import { WeatherResponse } from 'src/app/commons/interfaces/WeatherResponse.interface';
import { DayPipe } from 'src/app/commons/pipes/day.pipe';
import { DateFormattingPipe } from 'src/app/commons/pipes/date-formatting.pipe';
import { KelvinToCelsiusPipe } from 'src/app/commons/pipes/kelvin-to-celsius.pipe';
import { TimezoneFormatterPipe } from 'src/app/commons/pipes/timezone-formatter.pipe';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonRefresher, IonRefresherContent, IonGrid, IonCol, IonRow, DayPipe, DateFormattingPipe, KelvinToCelsiusPipe, TimezoneFormatterPipe]
})
export class WeatherPage implements OnInit {

  public res: WeatherResponse | null = null;

  constructor(
      private weatherAPI: WeatherService
  ) {}

    
  
  ngOnInit() {
    this.getWeatherData();
  }
  async getWeatherData(){
    (await this.weatherAPI.getWeatherData()).subscribe((response: WeatherResponse | null) => {
      this.res = response;
      console.log(this.res)
    });
  }
  handleRefresh(event: any) {
    setTimeout(() => {
      this.getWeatherData();
      event.target.complete();
    }, 1500);
  }
}