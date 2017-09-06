import { Injectable } from '@angular/core';
import { Http, Request, Headers, RequestOptions } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Contactmodel } from '../model/contactmodel';

@Injectable()
export class ContactService {
  //Subject is both an observer and observable
  public newContactSubject = new Subject<any>();
 headers;

  private contactUrlEndpoint: string = "http://202.1.39.154:3001/api/contacts";
  constructor(private http: Http) { }
  //get all contacts
  getContacts() {
    return this.http.get(this.contactUrlEndpoint)
      .map(res => res.json());
  }
 addNewContact(data){
    this.newContactSubject.next(data);
  }
//crud
  postContact(contactmodel:Contactmodel): Observable<Contactmodel>{
     let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    //let body = JSON.stringify(contactmodel);
    console.log(contactmodel);
    return this.http.post(this.contactUrlEndpoint,contactmodel,options)
    .map(res=>res.json());
  }
  //PostContact(contactmodel){
    //this.newContactSubject.next(contactmodel);
 // }

//delete service
 

}