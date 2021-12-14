import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserRequestPayload } from 'src/app/shared/user-request.payload';
import { User } from 'src/app/shared/user.payload';
import { UserService } from 'src/app/shared/user.service';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'add-brainiac',
  templateUrl: './add-brainiac.component.html',
  styleUrls: ['./add-brainiac.component.scss']
})
export class AddBrainiacComponent implements OnInit {  

  @Output() newUserEvent = new EventEmitter<UserRequestPayload>();
  @Input() editUser:UserRequestPayload;
  brainiacForm:FormGroup;
  brainiacPayload:UserRequestPayload;
  

  constructor(public activeModal: NgbActiveModal, private userService:UserService) { 
    this.brainiacPayload={
      first_name:'',
      last_name:'',
      email:''
    }
  }

  ngOnInit(): void {
    if(this.editUser===undefined){
      this.brainiacForm= new FormGroup({
        firstName:new FormControl('',Validators.required),
        lastName:new FormControl('',Validators.required),
        email:new FormControl('',[Validators.email, Validators.required])
      })
    }
   else{
    this.brainiacForm= new FormGroup({
      firstName:new FormControl(this.editUser.first_name,Validators.required),
      lastName:new FormControl(this.editUser.last_name,Validators.required),
      email:new FormControl(this.editUser.email,[Validators.email , Validators.required])
    })
   }
  }

  addBrainiac(){
    this.brainiacPayload.first_name= this.brainiacForm.get('firstName').value;
    this.brainiacPayload.last_name= this.brainiacForm.get('lastName').value;
    this.brainiacPayload.email= this.brainiacForm.get('email').value;

    if(this.editUser===undefined){
      this.userService.createUser(this.brainiacPayload).subscribe(()=>{
        console.log("Brainiac create"); 
        this.newUserEvent.emit(this.brainiacPayload);
      })
    }
    else{
      this.userService.editUser(this.brainiacPayload).subscribe(()=>{
        console.log("Brainiac edit"); 
        Object.assign(this.editUser,this.brainiacPayload);
      })
    }
    this.activeModal.close();
  }
}
