import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

  constructor(private http: Http) { }

  getUser(searchText):Observable<any> {
    const url = 'http://api.github.com/search/users?q=' + searchText;
    return this.http.get(url).map(
      res => {
        const data = res.json();
        console.log(data);
        return data;
      }
    )
  }
}
