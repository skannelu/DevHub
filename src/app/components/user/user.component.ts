import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'at-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [DataService]
})
export class UserComponent implements OnInit {
  //name: string;
  //age: number;
  //email: string;
  //address:Address;
  //posts: Post[];

  constructor(private dataService: DataService){  } 
  public resJSON;

  ngOnInit() {
    this.getAllPosts();
  }
  getAllPosts(){
  this.dataService.getPosts().subscribe(
    res => {
      this.resJSON = res;
    }
  );
}
}