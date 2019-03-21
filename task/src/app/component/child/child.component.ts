import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../iterface/user';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  col: any[];
  userdetails: User[];
  constructor() { }
@Input()
public set UserDetails(v : User[]) {
  this.userdetails = v;
  this.col = [];
 
  if(this.userdetails){
    console.log(this.userdetails);
  for (var i = 0; i <  this.userdetails.length; i++) {
      for (var key in  this.userdetails [i]) {
          if (this.col.indexOf(key) === -1) {
              this.col.push(key);
            
              
          }
      }  console.log(this.col);
  }
}
}

  ngOnInit() {
  }

}
