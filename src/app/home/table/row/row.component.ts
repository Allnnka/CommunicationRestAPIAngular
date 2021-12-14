import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/shared/user.payload';
import { UserService } from 'src/app/shared/user.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AddBrainiacComponent } from '../../add-brainiac/add-brainiac.component';

@Component({
  selector: '[table-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  @Input() user:User;
  @Output() deleteUserIdEvent = new EventEmitter<number>();
  constructor(private userService:UserService,private modalService:NgbModal) { }

  ngOnInit(): void {

  }
  deleteBrainiac(id:number){
    if(confirm("Are you sure to delete "+this.user.first_name+" "+this.user.last_name+" ?" )){
      this.userService.deleteUser(id).subscribe(()=>{
        console.log("Delete brainiac by id: "+id); 
        this.deleteUserIdEvent.emit(id);
      });
    }
  }
  editBrainiac(){
    const modalRef=this.modalService.open(AddBrainiacComponent);
    modalRef.componentInstance.editUser=this.user;
  }
}
