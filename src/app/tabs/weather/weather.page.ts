import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonCol, IonRow } from '@ionic/angular/standalone';
import { WeatherService } from 'src/app/commons/services/weather.service';
import { WeatherResponse } from 'src/app/commons/interfaces/WeatherResponse.interface';
import { DayPipe } from 'src/app/commons/pipes/day.pipe';
import { DateFormattingPipe } from 'src/app/commons/pipes/date-formatting.pipe';
import { KelvinToCelsiusPipe } from 'src/app/commons/pipes/kelvin-to-celsius.pipe';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonCol, IonRow, DayPipe, DateFormattingPipe, KelvinToCelsiusPipe]
})
export class WeatherPage implements OnInit {

  public res: WeatherResponse | null = null;

  constructor(
      private weatherAPI: WeatherService
  ) {}

    
  
  ngOnInit() {
    this.getWeatherData();
  }
  getWeatherData(){
    this.weatherAPI.getWeatherData().subscribe((response) => {
      this.res = response;
      console.log(this.res)
    });
  }
}