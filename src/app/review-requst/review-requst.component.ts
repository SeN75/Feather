import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-requst',
  templateUrl: './review-requst.component.html',
  styleUrls: ['./review-requst.component.css']
})
export class ReviewRequstComponent implements OnInit {

  review  = [{price: '50', name: 'saleh', star: 5}];
  constructor() { }

  ngOnInit() {
  }

}
