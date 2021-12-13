import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.payload';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() users:Array<User>;
  constructor(){}

  ngOnInit(): void {
  
  }
  deleteItem(){
    
  }
  
}
