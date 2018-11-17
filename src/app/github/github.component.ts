import { Component, OnInit } from '@angular/core';
import {GithubService} from '..//github.service'
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  searchResult;
  constructor(private githubservice :GithubService) { }

  ngOnInit() {
  }
/*
calling this method from user interface 
*/
  public search()
  {
   this.githubservice.searchUserGithub().subscribe(response=>{

    console.log(response)
    this.searchResult=response
   })

  }

}
