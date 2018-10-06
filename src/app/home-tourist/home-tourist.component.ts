import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-tourist',
  templateUrl: './home-tourist.component.html',
  styleUrls: ['./home-tourist.component.css']
})
export class HomeTouristComponent implements OnInit {
  public cityOptions;
  public catsOptions;
  public startDate;

  public city;
  public date;
  public from;
  public to;
  public count_of_people;
  public special;
  constructor(private services: ServicesService, private router: Router) { }

  ngOnInit() {
    this.services.GetCites().subscribe(data => {
      this.cityOptions = data;
    });
    this.services.GetCats().subscribe(data => {
      this.catsOptions = data;
    });

    this.startDate = new Date();
  }

  send() {
    this.services.SendActivity({
      fields: ["Land trip", "Sea trip"],
      target_date: this.date,
      count_of_events: 1,
      target_city: this.city,
      start_time: this.from,
      end_time: this.to,
      people_count: this.count_of_people
    }).subscribe(obj => {
      this.router.navigate(['/result']);
    });
  }

}
