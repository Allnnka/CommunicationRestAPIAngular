import { AfterViewInit, Component, EventEmitter, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserRequestPayload } from 'src/app/shared/user-request.payload';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'add-brainiac',
  templateUrl: './add-brainiac.component.html',
  styleUrls: ['./add-brainiac.component.scss']
})
export class AddBrainiacComponent implements OnInit {  

  brainiacForm:FormGroup;
  brainiacPayload:UserRequestPayload;
  constructor(public activeModal: NgbActiveModal, private userService:UserService) { 
    this.brainiacPayload={
      firstName:'',
      lastName:'',
      email:''
    }
  }

  ngOnInit(): void {
    this.brainiacForm= new FormGroup({
      firstName:new FormControl('',Validators.required),
      lastName:new FormControl('',Validators.required),
      email:new FormControl('',Validators.email)
    })
  }

  addBrainiac(){
    this.brainiacPayload.firstName= this.brainiacForm.get('firstName').value;
    this.brainiacPayload.lastName= this.brainiacForm.get('lastName').value;
    this.brainiacPayload.email= this.brainiacForm.get('email').value;

    this.userService.createUser(this.brainiacPayload).subscribe(()=>{
      console.log("Brainiac create");
    })
  }
}
