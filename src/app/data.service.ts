import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) { }

getData()
{
  // tslint:disable-next-line: comment-format
  return this.http.get('http://13.235.78.60:20000/student');
}
}

