import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/user.payload';

@Component({
  selector: '[table-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  @Input() user:User;

  constructor() { }

  ngOnInit(): void {
  }
}
