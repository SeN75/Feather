import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent implements OnInit {
  guides = Guider;
  constructor() { }

  ngOnInit() {
  }

}

export class TypeGuide {
  price;
  name;
  star;
}

export const Guider: TypeGuide [] = [
{price: '500', name: 'saleh saleh' , star: 5},
{price: '500', name: 'saleh saleh' , star: 5},
{price: '500', name: 'saleh saleh' , star: 5},
{price: '500', name: 'saleh saleh' , star: 5},
];
