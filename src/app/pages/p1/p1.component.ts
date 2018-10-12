import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { P1Service } from  '../p1.service';



@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class P1Component implements OnInit {

  public  donnees:  Array<object> = [];
  constructor(private  apiService:  P1Service) { }
  ngOnInit() {
    this.getT1();
  }

  public getT1(){
    this.apiService.getT1().subscribe((data:Array<Object>)=>{
      this.donnees  =  data;
      console.log(data);
  });
  }

}
