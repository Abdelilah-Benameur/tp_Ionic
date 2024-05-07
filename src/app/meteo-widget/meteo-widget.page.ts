  import { HttpClient } from '@angular/common/http';
  import { Component, OnInit } from '@angular/core';

  @Component({
    selector: 'app-meteo-widget',
    templateUrl: './meteo-widget.page.html',
    styleUrls: ['./meteo-widget.page.scss'],
  })
  export class MeteoWidgetPage  {

    city:any;
    pays: any;
    temp: any;
    pres: any;
    hum: any;
    weatherData: any;


    constructor(private httpclient: HttpClient) {
      this.getWeatherData();
    }

    getWeatherData(){
      this.httpclient.get("https://api.openweathermap.org/data/2.5/weather?q=Casablanca&appid=bfa5e4d3a3f69f594262ebea9cc05cae&units=metric")
      .subscribe(
        (response) =>{
          this.weatherData= response;
          console.log(this.weatherData);
          this.pays= this.weatherData['sys']['country'];
          this.temp= this.weatherData['main']['temp'];
          this.pres= this.weatherData['main']['pressure'];
          this.hum= this.weatherData['main']['humidity'];
          this.city= this.weatherData['name'];

        },
        (Error) =>{
          console.log(Error);
        }
      )

    }



  }
