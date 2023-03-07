import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users!: any
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.userService.getList().subscribe((response: any) => {
      this.users = response
      console.log(this.users)
    })

  }

}
