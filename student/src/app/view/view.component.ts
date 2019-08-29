import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
  import { from } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  private myData:Array<object>=[];

  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.fetchData();
  }
  fetchData()
  {
    this.apiService.getData().subscribe((response:Array<object>)=>{
      this.myData=response;
      console.log(this.myData);

    })
  }

}
