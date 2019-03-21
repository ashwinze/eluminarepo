import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  popupdialog: boolean;
  constructor(private router:Router) { }

  ngOnInit() {
    document.getElementById("myForm").style.display = "none";
  }
  switchpage1(){
    this.router.navigateByUrl("task1")
  }
  switchpage2(){
    this.router.navigateByUrl("task2")
  }
  popup(){
    document.getElementById("myForm").style.display = "block";
  }
   openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  // submit(input1,input2){

  // }
}
