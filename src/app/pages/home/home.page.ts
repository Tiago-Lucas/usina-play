import {Component, OnInit} from '@angular/core';
import {DataService} from "../../service/data.service";
import firebase from "firebase/compat";
import {User} from "../../interface/user";


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  users: User | undefined;


  constructor(private dataService: DataService) {
    this.dataService.getUsers().subscribe(res => {
      this.users = res[0]
    })
  }


}
