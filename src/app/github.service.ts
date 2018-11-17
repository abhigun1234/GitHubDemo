import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpclient :HttpClient) { }


  /*
  Defining a method for calling service method for fething all github users detail
  */ 

  public searchUserGithub() 
  {
    const searchText='js'
    return this.httpclient.get('http://api.github.com/search/users?q=' + searchText)

  }
}
