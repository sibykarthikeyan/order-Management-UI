import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from 'src/app/services/authentication.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: TokenPayload = {
    email: "",
    password: ""
  };
  return: string = '';
  constructor(private auth: AuthenticationService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => this.return = params['return'] || '/api/profile');
  }

  login() {
    console.log("in login",this.credentials);
    this.auth.login(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl(this.return);
      },
      err => {
        console.error(err);
      }
    );
  }
}
