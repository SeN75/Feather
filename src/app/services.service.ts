import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }
  private base: String = 'http://localhost:5000/feather-alpha/us-central1/ExpertFrom';
  
  public GetCites(): Observable<[]> {
    return this.http.get<[]>(this.base + '/api/getCities');
  }

  public GetCats() {
    return this.http.get(this.base + '/api/getCats');
  }

  public GetActivity() {
    return this.http.get(this.base + '/api/activity');
  }

  public SendActivity(queryObject) {
    return this.http.post(this.base + '/api/activity', queryObject);
  }
}
