import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/shared/user.payload';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() users:Array<User>;
  @Output() deleteUserIdEvent = new EventEmitter<number>();
  constructor(){}

  ngOnInit(): void {
    
  }
  deleteItem(event){
    this.deleteUserIdEvent.emit(event);
  }
}
