import { Component } from '@angular/core';
import { format, parse, parseISO } from 'date-fns';
import {WeatherService} from "../services/weather.service";

const DATE_FORMAT = "yyyy-MM-dd'T'HH:mm:ss'Z'";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public weather: any;
  public forecastWeather: any;
  public lat: any;
  public lng: any;
  public locationInfo : any;
  public currentDate = '';
  public weatherIcon = '/assets/images/cloudy.png';
  
  constructor(private service:WeatherService) {}
  async ngOnInit() {

    await this.service.getCurrentLocationInfo().subscribe((info) => {
      this.locationInfo = info;
      
      
      if (this.locationInfo != undefined) {
        console.log(info);
        console.log(this.locationInfo.city);
        this.locationInfo.city = this.locationInfo.city.replace(/ñ/g, "n");

        this.service.getWeatherFromApi(this.locationInfo.city).subscribe((weather) => {
          console.log(weather);
          this.weather = weather;
          this.setCurrentDate(this.weather.location.localtime);
          this.weatherIcon = this.getIcon(this.weather.current.weather_descriptions[0]);          
        });

        const splitCoordinate = this.locationInfo.loc.split(',');
        this.lat = splitCoordinate[0];
        this.lng = splitCoordinate[1];

        this.service.getForecastWeatherFromApi(this.lat, this.lng).subscribe((forecastWeather) => {
          this.forecastWeather = forecastWeather;

          console.log(this.forecastWeather);
        });
      }
    });

  }
  setCurrentDate(localtime: string) {
    this.currentDate = format(parseISO(localtime), DATE_FORMAT);
  }

  getIcon(description: string){
    switch (description){
    case "Partly cloudy":
      return '/assets/images/cloudy.png';
    case "Sunny":
      return '/assets/images/sunny.png';
    default:
      return '/assets/images/cloudy.png';
    }
  }
}
