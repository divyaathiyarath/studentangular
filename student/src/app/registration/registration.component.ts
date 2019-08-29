import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private apiService:ApiService) { }
  onSubmit(data:NgForm)
  {
    this.apiService.insertData(data.value).subscribe((response)=>
    {
      console.log(response);
      alert("Successfully inserted");
    });
  }

  ngOnInit() {
  }

}
