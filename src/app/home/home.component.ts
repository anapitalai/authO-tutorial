import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  departments:Array<any> =[{
  'name': 'SURVEY',
}, { 'name': 'CMS' }, { 'name': 'CDS' }, { 'name': 'EE' }, { 'name': 'MINING' },
{ 'name': 'NATSL' }, { 'name': 'AP' }, { 'name': 'CIVIL' }, { 'name': 'DODL' },
{ 'name': 'ITS' }, { 'name': 'LIB' }, { 'name': 'DBS' }, { 'name': 'MECH' },
{ 'name': 'ADMIN' }, { 'name': 'AG' }, { 'name': 'TRANSPORT' }, { 'name': 'FO' },
{ 'name': 'SSF' }, { 'name': 'CDS' }, { 'name': 'ARCHIE' }, { 'name': 'BURSARY' },
{ 'name': 'CTF' }, { 'name': 'ERMC' }, { 'name': 'STDADMIN' }, { 'name': 'PRINTING' },
{ 'name': 'APPSCI' }, { 'name': 'ATCDI' }, { 'name': 'MESS' }, { 'name': 'TLMU' },
{ 'name': 'ESTATES' }, { 'name': 'CLINIC' }, { 'name': 'BKSHOP' }, { 'name': 'TRANSPORT' },
{ 'name': 'UNC' }, { 'name': 'UNION BOARD' }, { 'name': 'SECURITY' }, { 'name': 'GNDS' },
{ 'name': 'TFTC' }, { 'name': 'BULOLO' }, { 'name': 'VC' }, { 'name': 'INTERNAL AUDIT' },
{ 'name': 'SRC' }, { 'name': 'TEMPSTARTSHERE' }, { 'name': 'EE' }, { 'name': 'MINING' },
{ 'name': 'NATSL' }, { 'name': 'AP' }, { 'name': 'CIVIL' }, { 'name': 'DODL' },
{ 'name': 'ITS' }, { 'name': 'LIB' }, { 'name': 'DBS' }, { 'name': 'MECH' },
{ 'name': 'ADMIN' }, { 'name': 'AG' }, { 'name': 'TRANSPORT' }, { 'name': 'FO' },
{ 'name': 'SSF' }, { 'name': 'CDS' }, { 'name': 'ARCHIE' }, { 'name': 'BURSARY' }
]

  constructor() { }


  ngOnInit() {
  }

}
