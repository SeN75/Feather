import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-rquest',
  templateUrl: './client-rquest.component.html',
  styleUrls: ['./client-rquest.component.css']
})
export class ClientRquestComponent implements OnInit {
Client = Clients;
  constructor() { }

  ngOnInit() {
  }

}
export const Clients: Client[] = [
  {
    name: 'hosam', city: 'jeddah',
   details: 'Entire any had depend and figure winter. Change stairs and'
  },
  {
    name: 'hosam', city: 'jeddah',
   details: 'Entire any had depend and figure winter. Change stairs and'
  },
  {
    name: 'hosam', city: 'jeddah',
   details: 'Entire any had depend and figure winter. Change stairs and'
  },
];
export class Client {
  name;
  city;
  details;
}
