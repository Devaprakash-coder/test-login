import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from '../app-service.service'
import { FormGroup, Validators ,FormBuilder, MinLengthValidator} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signupForm:any;
  constructor(private route: Router, private appservice: AppServiceService, private fb: FormBuilder) { }

  ngOnInit(): void { 
    this.signupForm = this.fb.group({
      uname: ['',Validators.required],
      pword: ['',Validators.required]
    })
  }


  signUp(signupForm:any) {
      let user = signupForm.value;
      this.appservice.saveUser(user).subscribe()
      this.route.navigate(['/login'])
  }

}
