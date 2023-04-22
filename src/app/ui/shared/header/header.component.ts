import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  status: boolean = false;
  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit(): void {
    this.authService.loggedIn.subscribe(res => this.status = res);
  }

  logouts() {
    this.authService.logOut();
    this.router.navigate(['home'])
  }

}
