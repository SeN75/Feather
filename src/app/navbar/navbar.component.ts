import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  items = ITEMS;
  constructor() { }

  ngOnInit() {
  }

}
export class Item {
  icon;
  path;
  name;
}
export const ITEMS: Item [] = [
  {icon: 'date_range ', path: '/home', name: ''},
  {icon: 'query_builder', path: '/history', name: ''},
  {icon: 'list ', path: '/result', name: ''},
  {icon: 'settings ', path: '.', name: ''},
];
