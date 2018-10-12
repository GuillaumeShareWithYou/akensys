import { Component, ViewEncapsulation } from '@angular/core';
import { AppSettings } from './app.settings';
import { Settings } from './app.settings.model';
import { P1Service } from  './pages/p1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public settings: Settings;

    public  donnees:  Array<object> = [];
    constructor(public appSettings:AppSettings, private  apiService:  P1Service
    ){
        this.settings = this.appSettings.settings;  
        this.apiService.getT1().subscribe((data:Array<Object>)=>{
            this.donnees  =  data;
            console.log(data);
            console.log(this.donnees["c1"]);
          });
          }    
}
