import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AddBrainiacComponent } from './add-brainiac/add-brainiac.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  openModelWindow(){
   this.modalService.open(AddBrainiacComponent);
  }
}
