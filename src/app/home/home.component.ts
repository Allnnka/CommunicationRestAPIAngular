import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../shared/user.payload';
import { UserService } from '../shared/user.service';
import { AddBrainiacComponent } from './add-brainiac/add-brainiac.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users:Array<User>=[];

  constructor(private modalService: NgbModal, private userService:UserService) { }

  openModelWindow(){
    const modalRef=this.modalService.open(AddBrainiacComponent);
    modalRef.componentInstance.newUserEvent.subscribe(($e)=>{
      this.addBrainiac($e);
    })
  }

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
  addBrainiac(user:User) {
    user.id=this.users.length+1;
    this.users.push(user);
  }
  deleteBrainiac(id:number){
    this.users= this.users.filter(el=>el.id!==id);
  }
}
