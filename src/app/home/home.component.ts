import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  students;

  constructor(public service: DataService) {
    // this.getData();
    // this.students = [{'no': 1, 'name': 'Saurabh'}, {'no': 2, 'name': 'Pratik'}, {'no': 3, 'name': 'Vishal'}];

   }
   ngOnInit()
   {
      let stateresult=this.service.getData();
      stateresult.subscribe((result)=>{
        console.log(result);
        this.students=result;

      });
   }
  //  getData()
  //    {
  //    let stateofreult=this.service.getData();
  //    stateofreult.subscribe((result)=>{
  //      this.students=result;
  //    });
  //   }


  }


