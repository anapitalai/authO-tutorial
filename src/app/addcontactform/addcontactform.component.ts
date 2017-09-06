import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ContactService} from '../services/contact.service';
import {Contactmodel } from '../model/contactmodel';
@Component({
  selector: 'app-addcontactform',
  templateUrl: './addcontactform.component.html',
  styleUrls: ['./addcontactform.component.css']
})
export class AddcontactformComponent implements OnInit {
  contactmodel:Contactmodel={name:'',title:'',designation:'',email:'',phone:null,image:''};
  @ViewChild('newCribForm') newCribForm:NgForm;
  constructor(public contactService:ContactService) { }

  ngOnInit() {
  }
  onCribSubmit(data): void {
   this.contactService.addNewContact(data);
this.newCribForm.reset();
  }
  postNewContact(){
    this.contactService.postContact(this.contactmodel)
    .subscribe(Contactmodel=>{
      console.log('the contact was saved to the db')
    })
  }
}
