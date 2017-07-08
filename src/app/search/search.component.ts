import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github/github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers:[GithubService]
})
export class SearchComponent implements OnInit {
  public searchText:string;
  public searchResult;
  public searchCount;


  constructor(private githubService:GithubService) { }

  ngOnInit() {
    
  }

  onKeyup(event){
    this.searchText = event.target.value;
    console.log("searchText " + this.searchText);
  }

  getUsers(){
    this.githubService.getUser(this.searchText).subscribe(
      res => {
        this.searchResult = res;
        this.searchCount = res.total_count;
        console.log(res);
      }
    );
  }

}
