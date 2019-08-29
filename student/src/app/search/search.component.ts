import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  status=false;
  private myData:Array<object>=[];

  constructor(private apiService:ApiService) { }

  onSubmit(data:NgForm)
  {
    this.apiService.searchData(data.value).subscribe((response:Array<object>)=>{
      // if(response.length>0)
      // {
      this.myData=response;
      console.log(response);
      this.status=true;
      // }
    })
  }

  ngOnInit() {
  }

}
