import { Component, OnInit } from '@angular/core';
import { Http,Headers,Request,RequestOptions } from '@angular/http';
import { ContactService } from '../services/contact.service';
import 'rxjs/add/operator/map';

import { Contactmodel } from '../model/contactmodel';

@Component({
  selector: 'app-svy',
  templateUrl: './svy.component.html',
  styleUrls: ['./svy.component.css']
})
export class SvyComponent implements OnInit {
  cribs: Array<any>;
  formData:Array<Contactmodel>;
  constructor(private service: ContactService) { }

  ngOnInit() {
    //make the http call
    /**this.http.get("http://202.1.39.154:3001/api/contacts")
    .map(res=>res.json().data)**/
   // this.service.postContact(contactmodel:Contactmodel): Observable<Contactmodel>)

    this.service.getContacts()
      .subscribe(data => this.cribs = data);

 
    this.service.newContactSubject.subscribe(
    data => this.cribs=[data, ...this.cribs]
    )

   //this.service.newContactSubject.subscribe(
    //data => this.formData=[data, ...this.formData]
   // )
  }
}



