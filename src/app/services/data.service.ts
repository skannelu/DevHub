import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import "rxjs/add/operator/map";



@Injectable()
export class DataService {

  constructor(public http:Http) { }
   getPosts(): Observable<any>{
     const url = 'https://itunes.apple.com/us/rss/toppaidapplications/limit=50/json';
     return this.http.get(url).map( res => res.json());
   }


}
