import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(public auth: AuthService,private router:Router) { }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(isauthenticated => {
      if (isauthenticated){
        this.router.navigate(['/productos']);

      }
    })
  }

  login(){
    this.auth.loginWithRedirect();
  }

  
  

}

  