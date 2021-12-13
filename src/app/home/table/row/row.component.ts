import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/shared/user.payload';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: '[table-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.scss']
})
export class RowComponent implements OnInit {

  @Input() user:User;
  @Output() deleteUserIdEvent = new EventEmitter<number>();


  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }
  deleteBrainiac(id:number){
    this.userService.deleteUser(id).subscribe(()=>{
      console.log("Delete brainiac by id: "+id); 
      this.deleteUserIdEvent.emit(id);
    });
  }
}
