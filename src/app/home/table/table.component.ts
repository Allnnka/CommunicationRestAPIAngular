import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/user.payload';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  users:Array<User>=[];
  constructor(private router:Router, private userService:UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      user=>{
        this.users=user.data;
      },
      error => {},
      () => { 
        console.log(this.users);
      }
    );
  } 
}
