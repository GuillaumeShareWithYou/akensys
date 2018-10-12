import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class P1Service {


  API_URL  =  'http://saalsa.com/api/v1/method';
  constructor(private  httpClient:  HttpClient) {}
  getT1(){
    return  this.httpClient.get(`${this.API_URL}/t1.get?id=2`);
    
    }
}
