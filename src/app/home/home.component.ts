import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { emit } from 'process';
import { UserRequestPayload } from '../shared/user-request.payload';
import { User } from '../shared/user.payload';
import { UserService } from '../shared/user.service';
import { AddBrainiacComponent } from './add-brainiac/add-brainiac.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private modalService: NgbModal, private userService:UserService) { }

  openModelWindow(){
    const modalRef=this.modalService.open(AddBrainiacComponent);
    modalRef.componentInstance.newUserEvent.subscribe(($e)=>{
      this.addBrainiac($e);
    })
  }

  users:Array<User>=[];

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
  addBrainiac(newItem: User) {
    newItem.id=this.users.length+1;
    this.users.push(newItem);
  }
  deleteBrainiac(id:number){
    this.users= this.users.filter(el=>el.id!==id);
  }
}
