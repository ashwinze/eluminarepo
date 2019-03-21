import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { User } from '../../iterface/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  userdetails: any;
  constructor(private ds:DataService,private router:Router) { }

  ngOnInit() {
    this.ds.getdata<User>().subscribe((d:any)=>{
    this.userdetails=d.data
    console.log(d);
    
      
    })
  }
  switchpage1(){
    this.router.navigateByUrl("task1")
  }
  switchpage2(){
    this.router.navigateByUrl("task2")
  }
}
