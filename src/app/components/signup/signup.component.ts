import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username : string = '';
  password : string = '';

  constructor( private auth : AuthService,
    private router: Router){}
  
  ngOnInit(): void {
    
  }

  signup(){
    if(this.username == '' ){
      alert('Please fill in the Username');
      return;
    }
    if(this.password == '' ){
      alert('Please fill in the Password');
      return;
    }

    this.auth.signup(this.username,this.password);
    this.username= '';
    this.password= '';
  }

  goBack(){
    this.router.navigate(['/landing']);
  }
}
