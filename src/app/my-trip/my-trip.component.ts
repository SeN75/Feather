import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-trip',
  templateUrl: './my-trip.component.html',
  styleUrls: ['./my-trip.component.css']
})
export class MyTripComponent implements OnInit {
  AwitTrips = TripAwit;
  DoneTrips = TripDone;
  CanceledTrips = TripCanceled;
  constructor() { }

  ngOnInit() {
  }

}

export class TypeTrips {
  price;
  datetime;
  star;
}

export const TripCanceled: TypeTrips [] = [
{price: '20', datetime: '01/9/2018' , star: 5},

];
export const TripAwit: TypeTrips [] = [
{price: '20', datetime: '01/10/2018' , star: 5},

];
export const TripDone: TypeTrips [] = [
{price: '30', datetime: '03/10/2018' , star: 5},
{price: '40', datetime: '04/10/2018' , star: 5},
{price: '122', datetime: '09/10/2018' , star: 5},
{price: '200', datetime: '11/10/2018' , star: 5},
];
